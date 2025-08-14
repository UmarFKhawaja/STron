import { ActionIcon } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import { useModal } from '../../providers';

export function SessionControls() {
  const { showModal } = useModal();

  return (
    <>
      <ActionIcon variant="transparent" c="gray" onClick={() => {
        showModal('logout');
      }}>
        <IconLogout/>
      </ActionIcon>
    </>
  );
}
