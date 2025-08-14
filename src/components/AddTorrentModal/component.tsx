import { useCallback, useRef } from 'react';
import { ActionIcon, Button, Group, Modal, Stack, Text, TextInput } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { IconClipboard } from '@tabler/icons-react';
import { type ModalType, useActions, useModal } from '../../providers';
import { isMagnetLink } from './methods';

const MODAL_TYPE: ModalType = 'add-torrent';

export function AddTorrentModal() {
  const { addTorrent } = useActions();

  const { open, hideModal } = useModal();

  const opened: boolean = open.get(MODAL_TYPE) ?? false;

  const inputRef = useRef<HTMLInputElement>(null);

  const [magnetLink, setMagnetLink] = useInputState<string>('');

  const handlePaste = useCallback(async () => {
    if (inputRef.current) {
      inputRef.current.focus();

      const magnetLink: string = await navigator.clipboard.readText();

      setMagnetLink(magnetLink);
    }
  }, [setMagnetLink]);

  const isNotMagnetLink = !isMagnetLink(magnetLink);

  return (
    <Modal title="Add torrent" opened={opened} withCloseButton onClose={(): void => hideModal(MODAL_TYPE)} size="lg">
      <Stack gap="xl">
        <Stack gap="xs">
          <Text size="sm" fw={500}>
            Paste the magnet link for the torrent.
          </Text>

          <TextInput size="lg" rightSection={(
            <ActionIcon variant="transparent" c="gray" onClick={handlePaste}>
              <IconClipboard/>
            </ActionIcon>
          )} ref={inputRef} value={magnetLink} onChange={setMagnetLink}/>
        </Stack>

        <Group gap="xs" justify="end">
          <Button variant="filled" disabled={isNotMagnetLink} onClick={async (): Promise<void> => {
            await addTorrent(magnetLink);

            setMagnetLink('');

            hideModal(MODAL_TYPE);
          }}>
            Add
          </Button>
          <Button variant="outline" onClick={(): void => hideModal(MODAL_TYPE)}>
            Cancel
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
