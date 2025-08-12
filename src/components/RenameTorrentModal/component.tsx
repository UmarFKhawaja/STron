import { Button, Group, Modal, Stack, Text, TextInput } from '@mantine/core';
import { type ModalType, useActions, useModal, useTorrent } from '../../providers';
import { useInputState } from '@mantine/hooks';

const MODAL_TYPE: ModalType = 'rename-torrent';

export function RenameTorrentModal() {
  const { torrent } = useTorrent();

  const { renameTorrent } = useActions();

  const { open, hideModal } = useModal();

  const opened: boolean = open.get(MODAL_TYPE) ?? false;

  const [name, setName] = useInputState<string>('');

  return (
    <Modal title="Rename torrent" opened={opened} withCloseButton onClose={(): void => hideModal(MODAL_TYPE)} size="lg">
      <Stack gap="xl">
        <Stack gap="xs">
          <Text size="sm" fw={500}>
            Choose the new torrent name.
          </Text>

          <TextInput size="lg" value={name} onChange={setName}/>
        </Stack>

        <Group gap="xs" justify="end">
          <Button variant="filled" onClick={async (): Promise<void> => {
            await renameTorrent(torrent, name);

            setName('');

            hideModal(MODAL_TYPE);
          }}>
            Rename
          </Button>
          <Button variant="outline" onClick={(): void => hideModal(MODAL_TYPE)}>
            Cancel
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
