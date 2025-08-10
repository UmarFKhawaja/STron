import { Menu, ThemeIcon } from '@mantine/core';
import {
  IconChecks,
  IconDots,
  IconFolder,
  IconLabel,
  IconPencil,
  IconSpeakerphone,
  IconTrash,
  IconTrashX
} from '@tabler/icons-react';
import { ActionButton } from '../ActionButton';

export function TorrentMenu() {
  return (
    <Menu>
      <Menu.Target>
        <ActionButton>
          <IconDots/>
        </ActionButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="green">
              <IconChecks/>
            </ThemeIcon>
          )}
        >
          Verify local data
        </Menu.Item>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="gray">
              <IconFolder/>
            </ThemeIcon>
          )}
        >
          Set location...
        </Menu.Item>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="gray">
              <IconPencil/>
            </ThemeIcon>
          )}
        >
          Rename...
        </Menu.Item>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="gray">
              <IconLabel/>
            </ThemeIcon>
          )}
        >
          Edit labels...
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="gray">
              <IconTrash/>
            </ThemeIcon>
          )}
        >
          Remove from list
        </Menu.Item>
        <Menu.Item
          leftSection={(
            <ThemeIcon variant="transparent" c="red">
              <IconTrashX/>
            </ThemeIcon>
          )}
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
        >
          Ask tracker for more peers
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
