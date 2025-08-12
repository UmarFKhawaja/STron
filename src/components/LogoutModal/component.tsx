import { Button, Group, Modal, Stack, Text } from '@mantine/core';
import { type ModalType, useCredentials, useModal } from '../../providers';

const MODAL_TYPE: ModalType = 'logout';

export function LogoutModal() {
  const { unsetCredentials } = useCredentials();

  const { open, hideModal } = useModal();

  const opened: boolean = open.get(MODAL_TYPE) ?? false;

  return (
    <Modal title="Logout" opened={opened} withCloseButton onClose={(): void => hideModal(MODAL_TYPE)} size="lg">
      <Stack gap="xl">
        <Stack gap="xs">
          <Text size="md">
            Confirm that you want to log out.
          </Text>

          <Text size="md">
            You will no longer be able to monitor your torrents.
          </Text>
        </Stack>

        <Group gap="xs" justify="end">
          <Button variant="filled" onClick={async (): Promise<void> => {
            await unsetCredentials();

            hideModal(MODAL_TYPE);
          }}>
            Logout
          </Button>
          <Button variant="outline" onClick={(): void => hideModal(MODAL_TYPE)}>
            Cancel
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
