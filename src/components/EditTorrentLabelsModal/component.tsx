import { Button, Group, Modal, Stack, Text, TextInput } from '@mantine/core';
import { type ModalType, useActions, useModal, useTorrent } from '../../providers';
import { useInputState } from '@mantine/hooks';

const MODAL_TYPE: ModalType = 'edit-torrent-labels';

export function EditTorrentLabelsModal() {
  const { torrent } = useTorrent();

  const { editTorrentLabels } = useActions();

  const { open, hideModal } = useModal();

  const opened: boolean = open.get(MODAL_TYPE) ?? false;

  const [labels, setLabels] = useInputState<string>('');

  return (
    <Modal title="Edit torrent labels" opened={opened} withCloseButton onClose={(): void => hideModal(MODAL_TYPE)} size="lg">
      <Stack gap="xl">
        <Stack gap="xs">
          <Text size="sm" fw={500}>
            Choose the new torrent labels.
          </Text>

          <TextInput size="lg" value={labels} onChange={setLabels}/>
        </Stack>

        <Group gap="xs" justify="end">
          <Button variant="filled" onClick={async (): Promise<void> => {
            await editTorrentLabels(torrent);

            setLabels('');

            hideModal(MODAL_TYPE);
          }}>
            Update labels
          </Button>
          <Button variant="outline" onClick={(): void => hideModal(MODAL_TYPE)}>
            Cancel
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
