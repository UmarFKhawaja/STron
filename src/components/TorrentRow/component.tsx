import { Divider, Group, Table, Text } from '@mantine/core';
import { IconArrowDown, IconArrowUp, IconPlayerPlay, IconPlayerStop } from '@tabler/icons-react';
import { ActionButton } from '../ActionButton';
import { ETALabel } from '../ETALabel';
import { ProgressDisplay } from '../ProgressDisplay';
import { StatusLabel } from '../StatusLabel';
import { TorrentMenu } from '../TorrentMenu';
import { type TorrentRowProps } from './props';

export function TorrentRow({ torrent }: TorrentRowProps) {
  return (
    <Table.Tr key={torrent.id}>
      <Table.Td>
        <Text>
          {torrent.name}
        </Text>
      </Table.Td>
      <Table.Td width={200}>
        <ETALabel torrent={torrent}/>
      </Table.Td>
      <Table.Td width={200}>
        <StatusLabel torrent={torrent}/>
      </Table.Td>
      <Table.Td width={200}>
        <ProgressDisplay torrent={torrent}/>
      </Table.Td>
      <Table.Td>
        <Group justify="right">
          <ActionButton>
            <IconPlayerPlay/>
          </ActionButton>
          <ActionButton>
            <IconPlayerStop/>
          </ActionButton>
          <ActionButton>
            <IconArrowUp/>
          </ActionButton>
          <ActionButton>
            <IconArrowDown/>
          </ActionButton>
          <Divider/>
          <TorrentMenu torrent={torrent}/>
        </Group>
      </Table.Td>
    </Table.Tr>
  );
}
