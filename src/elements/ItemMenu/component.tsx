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
import { useActions, useTorrent } from '../../providers';

export function ItemMenu() {
  const {
    verifyTorrentLocalData,
    setTorrentLocation,
    renameTorrent,
    editTorrentLabels,
    moveTorrentToTop,
    moveTorrentToBottom,
    removeTorrent,
    removeTorrentAndDeleteFiles,
    askTorrentTrackerForMorePeers
  } = useActions();

  const { torrent } = useTorrent();

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
          onClick={(): Promise<void> => setTorrentLocation(torrent)}
        >
          Set location...
        </Menu.Item>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="gray">
              <IconPencil/>
            </ThemeIcon>
          )}
          onClick={(): Promise<void> => renameTorrent(torrent)}
        >
          Rename...
        </Menu.Item>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="gray">
              <IconLabel/>
            </ThemeIcon>
          )}
          onClick={(): Promise<void> => editTorrentLabels(torrent)}
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
