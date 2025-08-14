import { TorrentStatus } from '@brielov/transmission-rpc';
import { ActionIcon } from '@mantine/core';
import { IconArrowBarDown, IconArrowBarUp, IconLink, IconPlayerPlay, IconPlayerStop } from '@tabler/icons-react';
import { useActions, useTorrent } from '../../providers';

export function ItemControls() {
  const {
    startTorrent,
    stopTorrent,
    moveTorrentUp,
    moveTorrentDown,
    copyTorrentLink
  } = useActions();

  const { torrent } = useTorrent();

  return (
    <>
      {
        torrent.status === TorrentStatus.Stopped
          ? (
            <ActionIcon variant="transparent" c="green" onClick={(): Promise<void> => startTorrent(torrent)}>
              <IconPlayerPlay/>
            </ActionIcon>
          )
          : (
            <ActionIcon variant="transparent" c="red" onClick={(): Promise<void> => stopTorrent(torrent)}>
              <IconPlayerStop/>
            </ActionIcon>
          )
      }
      <ActionIcon variant="transparent" c="gray" onClick={(): Promise<void> => moveTorrentUp(torrent)}>
        <IconArrowBarUp/>
      </ActionIcon>
      <ActionIcon variant="transparent" c="gray" onClick={(): Promise<void> => moveTorrentDown(torrent)}>
        <IconArrowBarDown/>
      </ActionIcon>
      <ActionIcon variant="transparent" c="gray" onClick={(): Promise<void> => copyTorrentLink(torrent)}>
        <IconLink/>
      </ActionIcon>
    </>
  );
}
