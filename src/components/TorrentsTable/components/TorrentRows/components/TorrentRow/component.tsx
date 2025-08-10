import { Group, Stack, Table, Text } from '@mantine/core';
import { useTorrent } from '../../../../../../providers';
import { TorrentControls } from '../../../../../TorrentControls';
import { TorrentMenu } from '../../../../../TorrentMenu';
import { ETALabel, InfoDisplay, ProgressDisplay, RatioLabel, StatusLabel } from './components';

export function TorrentRow() {
  const { torrent } = useTorrent();

  return (
    <Table.Tr key={torrent.id}>
      <Table.Td>
        <Stack>
          <Text size="lg" fw={600}>
            {torrent.name}
          </Text>
          <Group>
            <InfoDisplay mode="percentageDone"/>
            <InfoDisplay mode="downloadedBytes"/>
            <InfoDisplay mode="uploadedBytes"/>
            <InfoDisplay mode="downloadRate"/>
            <InfoDisplay mode="uploadRate"/>
          </Group>
        </Stack>
      </Table.Td>
      <Table.Td width={100}>
        <ETALabel/>
      </Table.Td>
      <Table.Td width={100}>
        <RatioLabel/>
      </Table.Td>
      <Table.Td width={100}>
        <StatusLabel/>
      </Table.Td>
      <Table.Td width={300}>
        <Stack>
          <ProgressDisplay/>
          <Group justify="space-between">
            <TorrentControls/>
            <TorrentMenu/>
          </Group>
        </Stack>
      </Table.Td>
    </Table.Tr>
  );
}
