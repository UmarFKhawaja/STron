import { ActionIcon, Menu, ThemeIcon } from '@mantine/core';
import {
  IconArrowBarToDown,
  IconArrowBarToUp,
  IconChecks,
  IconDots,
  IconFolder,
  IconLabel,
  IconPencil,
  IconSpeakerphone,
  IconTrash,
  IconTrashX
} from '@tabler/icons-react';
import { useActions, useModal, useTorrent } from '../../providers';

export function ItemMenu() {
  const { torrent } = useTorrent();

  const {
    verifyTorrentLocalData,
    moveTorrentToTop,
    moveTorrentToBottom,
    removeTorrent,
    removeTorrentAndDeleteFiles,
    askTorrentTrackerForMorePeers
  } = useActions();

  const { showModal } = useModal();

  return (
    <Menu>
      <Menu.Target>
        <ActionIcon variant="transparent" c="gray">
          <IconDots/>
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="green">
              <IconChecks/>
            </ThemeIcon>
          )}
          onClick={(): Promise<void> => verifyTorrentLocalData(torrent)}
        >
          Verify local data
        </Menu.Item>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="gray">
              <IconFolder/>
            </ThemeIcon>
          )}
          onClick={async (): Promise<void> => {
            showModal('set-torrent-location');
          }}
        >
          Set location...
        </Menu.Item>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="gray">
              <IconPencil/>
            </ThemeIcon>
          )}
          onClick={async (): Promise<void> => {
            showModal('rename-torrent');
          }}
        >
          Rename...
        </Menu.Item>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="gray">
              <IconLabel/>
            </ThemeIcon>
          )}
          onClick={async (): Promise<void> => {
            showModal('edit-torrent-labels');
          }}
        >
          Edit labels...
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="gray">
              <IconArrowBarToUp/>
            </ThemeIcon>
          )}
          onClick={(): Promise<void> => moveTorrentToTop(torrent)}
        >
          Move to top
        </Menu.Item>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="gray">
              <IconArrowBarToDown/>
            </ThemeIcon>
          )}
          onClick={(): Promise<void> => moveTorrentToBottom(torrent)}
        >
          Move to bottom
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="gray">
              <IconTrash/>
            </ThemeIcon>
          )}
          onClick={(): Promise<void> => removeTorrent(torrent)}
        >
          Remove from list
        </Menu.Item>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="red">
              <IconTrashX/>
            </ThemeIcon>
          )}
          onClick={(): Promise<void> => removeTorrentAndDeleteFiles(torrent)}
        >
          Delete downloaded files and remove from list
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="gray">
              <IconSpeakerphone/>
            </ThemeIcon>
          )}
          onClick={(): Promise<void> => askTorrentTrackerForMorePeers(torrent)}
        >
          Ask tracker for more peers
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
