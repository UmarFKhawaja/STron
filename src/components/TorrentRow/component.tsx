import { Divider, Group, Table, Text } from '@mantine/core';
import { TorrentProvider } from '../../providers';
import { ETALabel } from '../ETALabel';
import { ProgressDisplay } from '../ProgressDisplay';
import { StatusLabel } from '../StatusLabel';
import { TorrentControls } from '../TorrentControls';
import { TorrentMenu } from '../TorrentMenu';
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
        <Table.Td>
          <Group justify="right">
            <TorrentControls/>
            <Divider/>
            <TorrentMenu/>
          </Group>
        </Table.Td>
      </Table.Tr>
    </TorrentProvider>
  );
}
