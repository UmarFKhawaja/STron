import { Group } from '@mantine/core';
import { IconArrowBarDown, IconArrowBarUp, IconLink, IconPlayerPlay, IconPlayerStop } from '@tabler/icons-react';
import { useActions, useTorrent } from '../../providers';
import { ActionButton } from '../ActionButton';

export function TorrentControls() {
  const {
    startTorrent,
    stopTorrent,
    moveTorrentUp,
    moveTorrentDown,
    copyTorrentLink
  } = useActions();

  const { torrent } = useTorrent();

  return (
    <Group gap="xs">
      <ActionButton onClick={(): Promise<void> => startTorrent(torrent.id)}>
        <IconPlayerPlay/>
      </ActionButton>
      <ActionButton onClick={(): Promise<void> => stopTorrent(torrent.id)}>
        <IconPlayerStop/>
      </ActionButton>
      <ActionButton onClick={(): Promise<void> => moveTorrentUp(torrent.id)}>
        <IconArrowBarUp/>
      </ActionButton>
      <ActionButton onClick={(): Promise<void> => moveTorrentDown(torrent.id)}>
        <IconArrowBarDown/>
      </ActionButton>
      <ActionButton onClick={(): Promise<void> => copyTorrentLink(torrent.id)}>
        <IconLink/>
      </ActionButton>
    </Group>
  );
}
