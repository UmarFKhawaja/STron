import { Button, Group, Modal, Stack, Text, TextInput } from '@mantine/core';
import { type ModalType, useActions, useModal, useTorrent } from '../../providers';
import { useInputState } from '@mantine/hooks';

const MODAL_TYPE: ModalType = 'set-torrent-location';

export function SetTorrentLocationModal() {
  const { torrent } = useTorrent();

  const { setTorrentLocation } = useActions();

  const { open, hideModal } = useModal();

  const opened: boolean = open.get(MODAL_TYPE) ?? false;

  const [location, setLocation] = useInputState<string>('');

  return (
    <Modal title="Set torrent location" opened={opened} withCloseButton onClose={(): void => hideModal(MODAL_TYPE)} size="lg">
      <Stack gap="xl">
        <Stack gap="xs">
          <Text size="sm" fw={500}>
            Choose the new torrent location.
          </Text>

          <TextInput size="lg" value={location} onChange={setLocation}/>
        </Stack>

        <Group gap="xs" justify="end">
          <Button variant="filled" onClick={async (): Promise<void> => {
            await setTorrentLocation(torrent, location);

            setLocation('');

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
