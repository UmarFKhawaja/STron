import { useMemo } from 'react';
import { Button, type ComboboxItem, Group, Modal, Select, Stack, Text, TextInput } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { config } from '../../config';
import { type ModalType, useActions, useModal, useTorrent } from '../../providers';
import { isTorrentLocationAllowable, makeTorrentLocation, parseTorrentLocation } from './methods';

const MODAL_TYPE: ModalType = 'set-torrent-location';

export function SetTorrentLocationModal() {
  const { torrent } = useTorrent();

  const { setTorrentLocation } = useActions();

  const { open, hideModal } = useModal();

  const opened: boolean = open.get(MODAL_TYPE) ?? false;

  const initialState = useMemo(() => parseTorrentLocation(torrent), [torrent]);

  const [name, setName] = useInputState<string>(initialState.name);

  const [folder, setFolder] = useInputState<ComboboxItem>(initialState.folder);

  const isDisallowed: boolean = !isTorrentLocationAllowable(name, folder.value);

  return (
    <Modal title="Set torrent location" opened={opened} withCloseButton onClose={(): void => hideModal(MODAL_TYPE)} size="lg">
      <Stack gap="xl">
        <Stack gap="xs">
          <Text size="sm" fw={500}>
            Choose the new torrent location.
          </Text>

          <TextInput size="lg" value={name} onChange={setName}/>

          <Select
            size="lg"
            autoSelectOnBlur
            data={
              config.availableFolders
                .map((availableFolder: string) => ({
                  value: availableFolder,
                  label: availableFolder
                }))
            }
            value={folder.value}
            onChange={(_, option) => setFolder(option)}
          />
        </Stack>

        <Group gap="xs" justify="end">
          <Button variant="filled" disabled={isDisallowed} onClick={async (): Promise<void> => {
            await setTorrentLocation(torrent, makeTorrentLocation(name, folder.value));

            hideModal(MODAL_TYPE);
          }}>
            Set location
          </Button>
          <Button variant="outline" onClick={(): void => hideModal(MODAL_TYPE)}>
            Cancel
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
