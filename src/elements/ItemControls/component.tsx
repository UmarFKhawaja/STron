import { ActionIcon, Group } from '@mantine/core';
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
    <Group gap="xs">
      <ActionIcon variant="transparent" c="gray" onClick={(): Promise<void> => startTorrent(torrent)}>
        <IconPlayerPlay/>
      </ActionIcon>
      <ActionIcon variant="transparent" c="gray" onClick={(): Promise<void> => stopTorrent(torrent)}>
        <IconPlayerStop/>
      </ActionIcon>
      <ActionIcon variant="transparent" c="gray" onClick={(): Promise<void> => moveTorrentUp(torrent)}>
        <IconArrowBarUp/>
      </ActionIcon>
      <ActionIcon variant="transparent" c="gray" onClick={(): Promise<void> => moveTorrentDown(torrent)}>
        <IconArrowBarDown/>
      </ActionIcon>
      <ActionIcon variant="transparent" c="gray" onClick={(): Promise<void> => copyTorrentLink(torrent)}>
        <IconLink/>
      </ActionIcon>
    </Group>
  );
}
