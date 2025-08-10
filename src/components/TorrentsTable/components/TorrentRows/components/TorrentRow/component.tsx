import { Divider, Group, Table, Text } from '@mantine/core';
import { TorrentProvider } from '../../../../../../providers';
import { TorrentControls } from '../../../../../TorrentControls';
import { TorrentMenu } from '../../../../../TorrentMenu';
import { ETALabel, ProgressDisplay, StatusLabel } from './components';
import { type TorrentRowProps } from './props';

export function TorrentRow({ torrent }: TorrentRowProps) {
  return (
    <TorrentProvider torrent={torrent}>
      <Table.Tr key={torrent.id}>
        <Table.Td>
          <Text>
            {torrent.name}
          </Text>
        </Table.Td>
        <Table.Td width={200}>
          <ETALabel/>
        </Table.Td>
        <Table.Td width={200}>
          <StatusLabel/>
        </Table.Td>
        <Table.Td width={200}>
          <ProgressDisplay/>
        </Table.Td>
        <Table.Td width={360}>
          <Group justify="space-between">
            <TorrentControls/>
            <Divider/>
            <TorrentMenu/>
          </Group>
        </Table.Td>
      </Table.Tr>
    </TorrentProvider>
  );
}
