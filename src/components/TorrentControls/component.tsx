import { Divider } from '@mantine/core';
import { IconArrowDown, IconArrowUp, IconInfoCircle, IconPlayerPlay, IconPlayerStop } from '@tabler/icons-react';
import { ActionButton } from '../ActionButton';

export function TorrentControls() {
  return (
    <>
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
      <Divider/>
      <ActionButton>
        <IconInfoCircle/>
      </ActionButton>
    </>
  );
}
