import { Menu } from '@mantine/core';
import { IconDotsVertical } from '@tabler/icons-react';
import { ActionButton } from '../ActionButton';

export function TorrentMenu() {
  return (
    <Menu>
      <Menu.Target>
        <ActionButton>
          <IconDotsVertical/>
        </ActionButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Remove from list</Menu.Item>
        <Menu.Item>Delete downloaded files and remove from list</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
