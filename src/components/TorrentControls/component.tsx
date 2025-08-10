import { ActionIcon, Group } from '@mantine/core';
import { IconArrowBarDown, IconArrowBarUp, IconLink, IconPlayerPlay, IconPlayerStop } from '@tabler/icons-react';
import { useActions, useTorrent } from '../../providers';

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
      <ActionIcon variant="transparent" c="gray" onClick={(): Promise<void> => startTorrent(torrent.id)}>
        <IconPlayerPlay/>
      </ActionIcon>
      <ActionIcon variant="transparent" c="gray" onClick={(): Promise<void> => stopTorrent(torrent.id)}>
        <IconPlayerStop/>
      </ActionIcon>
      <ActionIcon variant="transparent" c="gray" onClick={(): Promise<void> => moveTorrentUp(torrent.id)}>
        <IconArrowBarUp/>
      </ActionIcon>
      <ActionIcon variant="transparent" c="gray" onClick={(): Promise<void> => moveTorrentDown(torrent.id)}>
        <IconArrowBarDown/>
      </ActionIcon>
      <ActionIcon variant="transparent" c="gray" onClick={(): Promise<void> => copyTorrentLink(torrent.id)}>
        <IconLink/>
      </ActionIcon>
    </Group>
  );
}
