import { useCallback, useMemo } from 'react';
import { Text } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { config } from '../../config';
import { type Torrent } from '../../types';
import { useCredentials } from '../CredentialsProvider';
import { ActionsContext } from './context';
import { type ActionsProviderProps } from './props';
import { ActionService } from './services';
import { type ActionsValue } from './types';

export function ActionsProvider({ children }: ActionsProviderProps) {
  const clipboard = useClipboard();

  const { username, password, hasCredentials } = useCredentials();

  const service: ActionService | null = useMemo(
    () => hasCredentials
      ? new ActionService({
        ...config.transmission,
        username,
        password
      })
      : null, [username, password, hasCredentials]
  );

  const fetchTorrents = useCallback(async (): Promise<Torrent[]> => {
    return service ? await service.fetchTorrents() : []
  }, [service]);

  const startAllTorrents = useCallback(async (torrents: Torrent[]): Promise<void> => {
    if (service) {
      await service.startAllTorrents(torrents);
    }
  }, [service]);

  const stopAllTorrents = useCallback(async (torrents: Torrent[]): Promise<void> => {
    if (service) {
      await service.stopAllTorrents(torrents);
    }
  }, [service]);

  const startTorrent = useCallback(async (torrent: Torrent): Promise<void> => {
    if (service) {
      await service.startTorrents(torrent);
    }
  }, [service]);

  const stopTorrent = useCallback(async (torrent: Torrent): Promise<void> => {
    if (service) {
      await service.stopTorrents(torrent);
    }
  }, [service]);

  const moveTorrentUp = useCallback(async (torrent: Torrent): Promise<void> => {
    if (service) {
      await service.moveTorrentUp(torrent);
    }
  }, [service]);

  const moveTorrentDown = useCallback(async (torrent: Torrent): Promise<void> => {
    if (service) {
      await service.moveTorrentDown(torrent);
    }
  }, [service]);

  const moveTorrentToTop = useCallback(async (torrent: Torrent): Promise<void> => {
    if (service) {
      await service.moveTorrentToTop(torrent);
    }
  }, [service]);

  const moveTorrentToBottom = useCallback(async (torrent: Torrent): Promise<void> => {
    if (service) {
      await service.moveTorrentToBottom(torrent);
    }
  }, [service]);

  const copyTorrentLink = useCallback(async (torrent: Torrent): Promise<void> => {
    clipboard.copy(torrent.magnetLink);

    showNotification({
      message: <Text>A magnet link to the torrent <strong>{torrent.name}</strong> has been copied to the clipboard.</Text>,
      color: 'green',
      title: 'Torrent'
    });
  }, [clipboard]);

  const verifyTorrentLocalData = useCallback(async (torrent: Torrent): Promise<void> => {
    if (service) {
      await service.verifyTorrentLocalData(torrent);
    }
  }, [service]);

  const setTorrentLocation = useCallback(async (torrent: Torrent, location: string): Promise<void> => {
    if (service) {
      await service.setTorrentLocation(torrent, location);
    }
  }, [service]);

  const renameTorrent = useCallback(async (torrent: Torrent, name: string): Promise<void> => {
    if (service) {
      await service.renameTorrent(torrent, name);
    }
  }, [service]);

  const editTorrentLabels = useCallback(async (torrent: Torrent, labels: string[]): Promise<void> => {
    if (service) {
      await service.editTorrentLabels(torrent, labels);
    }
  }, [service]);

  const addTorrent = useCallback(async (magnetLink: string): Promise<void> => {
    if (service) {
      await service.addTorrent(magnetLink);
    }
  }, [service]);

  const removeTorrent = useCallback(async (torrent: Torrent): Promise<void> => {
    if (service) {
      await service.removeTorrent(torrent);
    }
  }, [service]);

  const removeTorrentAndDeleteFiles = useCallback(async (torrent: Torrent): Promise<void> => {
    if (service) {
      await service.removeTorrentAndDeleteFiles(torrent);
    }
  }, [service]);

  const askTorrentTrackerForMorePeers = useCallback(async (torrent: Torrent): Promise<void> => {
    if (service) {
      await service.askTorrentTrackerForMorePeers(torrent);
    }
  }, [service]);

  const value: ActionsValue = {
    fetchTorrents,
    startAllTorrents,
    stopAllTorrents,
    startTorrent,
    stopTorrent,
    moveTorrentUp,
    moveTorrentDown,
    moveTorrentToTop,
    moveTorrentToBottom,
    copyTorrentLink,
    verifyTorrentLocalData,
    setTorrentLocation,
    renameTorrent,
    editTorrentLabels,
    addTorrent,
    removeTorrent,
    removeTorrentAndDeleteFiles,
    askTorrentTrackerForMorePeers
  };

  return (
    <ActionsContext.Provider value={value}>
      {children}
    </ActionsContext.Provider>
  );
}
