import { TorrentStatus } from '@brielov/transmission-rpc';
import { ActionIcon, Divider } from '@mantine/core';
import { IconPlayerPlay, IconPlayerStop, IconSparkles } from '@tabler/icons-react';
import { useActions, useModal, useTorrents } from '../../providers';
import { type Torrent } from '../../types';

export function TorrentControls() {
  const { showModal } = useModal();

  const {
    startAllTorrents,
    stopAllTorrents
  } = useActions();

  const { torrents } = useTorrents();

  const areAllTorrentStarted: boolean = torrents.every((torrent: Torrent): boolean => torrent.status !== TorrentStatus.Stopped)

  const areAllTorrentStopped: boolean = torrents.every((torrent: Torrent): boolean => torrent.status === TorrentStatus.Stopped)

  return (
    <>
      <ActionIcon variant="transparent" c="yellow" onClick={(): void => {
        showModal('add-torrent');
      }}>
        <IconSparkles/>
      </ActionIcon>
      <Divider size="xs"/>
      <ActionIcon variant="transparent" c={areAllTorrentStarted ? 'gray' : 'green'} onClick={() => startAllTorrents(torrents)}>
        <IconPlayerPlay/>
      </ActionIcon>
      <ActionIcon variant="transparent" c={areAllTorrentStopped ? 'gray' : 'red'} onClick={() => stopAllTorrents(torrents)}>
        <IconPlayerStop/>
      </ActionIcon>
    </>
  );
}
