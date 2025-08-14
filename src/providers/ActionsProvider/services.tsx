import { orderBy } from 'lodash';
import { type GetTorrentResponse, TransmissionClient } from '@brielov/transmission-rpc';
import { Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { type Torrent, type TorrentKeys } from '../../types';

export class ActionService {
  private readonly transmissionClient: TransmissionClient;

  constructor({ mode, host, port, path, username, password }: {
    mode: string,
    host: string,
    port: number,
    path: string
    username: string,
    password: string,
  }) {
    const scheme: string = mode === 'SSL' ? 'https' : 'http';
    const url: string = new URL(path, `${scheme}://${host}:${port}`).toString();

    this.transmissionClient = new TransmissionClient(url, {
      username,
      password
    });
  }

  async fetchTorrents(): Promise<Torrent[]> {
    return this.performAction(async (): Promise<Torrent[]> => {
      const response: GetTorrentResponse<TorrentKeys> = await this.transmissionClient.get({
        fields: [
          'id',
          'name',
          'eta',
          'status',
          'percentComplete',
          'totalSize',
          'uploadRatio',
          'rateUpload',
          'rateDownload',
          'uploadedEver',
          'downloadedEver',
          'magnetLink',
          'queuePosition',
          'recheckProgress',
          'downloadDir',
          'labels'
        ]
      });

      return orderBy([
        ...response.torrents
      ], (torrent: Torrent): number => torrent.queuePosition);
    }, 'Credentials', `There was a problem fetching torrents.`, []);
  }

  async startAllTorrents(torrents: Torrent[]): Promise<void> {
    await Promise.all(
      torrents.map(async (torrent: Torrent): Promise<void> => {
        await this.performAction(async (): Promise<void> => {
          await this.transmissionClient.start(torrent.id);
        }, 'Torrent', `There was a problem starting the torrent: ${torrent.name}`, void 0);
      })
    );
  }

  async stopAllTorrents(torrents: Torrent[]): Promise<void> {
    await Promise.all(
      torrents.map(async (torrent: Torrent): Promise<void> => {
        await this.performAction(async (): Promise<void> => {
          await this.transmissionClient.stop(torrent.id);
        }, 'Torrent', `There was a problem stopping the torrent: ${torrent.name}`, void 0);
      })
    );
  }

  async startTorrents(torrent: Torrent): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.start(torrent.id);
    }, 'Torrent', `There was a problem starting the torrent: ${torrent.name}`, void 0);
  }

  async stopTorrents(torrent: Torrent): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.stop(torrent.id);
    }, 'Torrent', `There was a problem stopping the torrent: ${torrent.name}`, void 0);
  }

  async moveTorrentUp(torrent: Torrent): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.moveUp(torrent.id);
    }, 'Torrent', `There was a problem moving the torrent up: ${torrent.name}`, void 0);
  }

  async moveTorrentDown(torrent: Torrent): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.moveDown(torrent.id);
    }, 'Torrent', `There was a problem moving the torrent down: ${torrent.name}`, void 0);
  }

  async moveTorrentToTop(torrent: Torrent): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.moveTop(torrent.id);
    }, 'Torrent', `There was a problem moving the torrent to the top: ${torrent.name}`, void 0);
  }

  async moveTorrentToBottom(torrent: Torrent): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.moveBottom(torrent.id);
    }, 'Torrent', `There was a problem moving the torrent to the bottom: ${torrent.name}`, void 0);
  }

  async verifyTorrentLocalData(torrent: Torrent): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.verify(torrent.id);
    }, 'Torrent', `There was a problem verifying the local data of the torrent: ${torrent.name}`, void 0);
  }

  async setTorrentLocation(torrent: Torrent, location: string): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.move(torrent.id, location, true);
    }, 'Torrent', `There was a problem setting the location of the torrent: ${torrent.name}`, void 0);
  }

  async renameTorrent(torrent: Torrent, name: string): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.renamePath(torrent.id, torrent.name, name);
    }, 'Torrent', `There was a problem renaming the torrent: ${torrent.name}`, void 0);
  }

  async editTorrentLabels(torrent: Torrent, labels: string[]): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.set({
        ids: [torrent.id],
        labels
      });
    }, 'Torrent', `There was a problem setting labels on the torrent: ${torrent.name}`, void 0);
  }

  async addTorrent(magnetLink: string): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.add({
        filename: magnetLink
      });
    }, 'torrent', 'There was a problem adding a torrent with a magnet link.', void 0);
  }

  async removeTorrent(torrent: Torrent): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.remove(torrent.id, false);
    }, 'Torrent', `There was a problem removing the torrent: ${torrent.name}`, void 0);
  }

  async removeTorrentAndDeleteFiles(torrent: Torrent): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.remove(torrent.id, true);
    }, 'Torrent', `There was a problem removing the torrent amd deleting files: ${torrent.name}`, void 0);
  }

  async askTorrentTrackerForMorePeers(torrent: Torrent): Promise<void> {
    await this.performAction(async (): Promise<void> => {
      await this.transmissionClient.reannounce(torrent.id);
    }, 'Torrent', `There was a problem asking tracker for more peers for the torrent: ${torrent.name}`, void 0);
  }

  private async performAction<T>(action: () => Promise<T>, actionTitle: string, actionMessage: string, defaultValue: T): Promise<T> {
    try {
      return await action();
    } catch (error: unknown) {
      const { message: errorMessage } = error as Error;

      showNotification({
        message: (
          <>
            <Text ff="heading">{actionMessage}</Text>
            <Text ff="text">{errorMessage}</Text>
          </>
        ),
        color: 'red',
        title: actionTitle
      });

      return defaultValue;
    }
  }
}
