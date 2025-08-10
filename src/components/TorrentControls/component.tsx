import { Group } from '@mantine/core';
import { IconArrowDown, IconArrowUp, IconLink, IconPlayerPlay, IconPlayerStop } from '@tabler/icons-react';
import { ActionButton } from '../ActionButton';

export function TorrentControls() {
  return (
    <Group gap="xs">
      <ActionButton>
        <IconPlayerPlay/>
      </ActionButton>
      <ActionButton>
        <IconPlayerStop/>
      </ActionButton>
      <ActionButton>
        <IconArrowUp/>
      </ActionButton>
      <ActionButton>
        <IconArrowDown/>
      </ActionButton>
      <ActionButton>
        <IconLink/>
      </ActionButton>
    </Group>
  );
}
