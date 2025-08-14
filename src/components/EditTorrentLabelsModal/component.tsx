import { type KeyboardEvent } from 'react';
import { Button, Group, Modal, Pill, PillsInput, Stack, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { type ModalType, useActions, useModal, useTorrent } from '../../providers';

const MODAL_TYPE: ModalType = 'edit-torrent-labels';

export function EditTorrentLabelsModal() {
  const { torrent } = useTorrent();

  const { editTorrentLabels } = useActions();

  const { open, hideModal } = useModal();

  const opened: boolean = open.get(MODAL_TYPE) ?? false;

  const [labels, { append: addLabel, remove: removeLabel }] = useListState<string>([
    ...(torrent.labels ? torrent.labels : [])
  ]);

  return (
    <Modal title="Edit torrent labels" opened={opened} withCloseButton onClose={(): void => hideModal(MODAL_TYPE)} size="lg">
      <Stack gap="xl">
        <Stack gap="xs">
          <Text size="sm" fw={500}>
            Choose the new torrent labels.
          </Text>

          <PillsInput size="lg">
            <Pill.Group>
              {
                labels.map((label: string, index: number) => (
                  <Pill key={label} withRemoveButton onRemove={(): void => removeLabel(index)}>
                    {label}
                  </Pill>
                ))
              }
              <PillsInput.Field placeholder="Enter labels" onKeyDown={(e: KeyboardEvent<HTMLInputElement>): void => {
                if (e.code === 'Enter') {
                  addLabel(e.currentTarget.value);

                  e.currentTarget.value = '';
                }
              }}/>
            </Pill.Group>
          </PillsInput>
        </Stack>

        <Group gap="xs" justify="end">
          <Button variant="filled" onClick={async (): Promise<void> => {
            await editTorrentLabels(torrent, labels);

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
