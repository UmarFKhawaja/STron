import { Center, Group, Stack, Table, Text } from '@mantine/core';
import { useTorrent } from '../../../../../../providers';
import { TorrentControls } from '../../../../../TorrentControls';
import { TorrentMenu } from '../../../../../TorrentMenu';
import { ETALabel, InfoDisplay, ProgressDisplay, RatioLabel, StatusLabel } from './components';

export function TorrentRow() {
  const { torrent } = useTorrent();

  return (
    <Table.Tr key={torrent.id}>
      <Table.Td>
        <Stack gap="sm" align="start">
          <Text size="lg" fw={600}>
            {torrent.name}
          </Text>
          <Group gap="xs">
            <InfoDisplay mode="percentageDone"/>
            <InfoDisplay mode="downloadedBytes"/>
            <InfoDisplay mode="uploadedBytes"/>
            <InfoDisplay mode="downloadRate"/>
            <InfoDisplay mode="uploadRate"/>
          </Group>
        </Stack>
      </Table.Td>
      <Table.Td width={100}>
        <Center>
          <ETALabel/>
        </Center>
      </Table.Td>
      <Table.Td width={100}>
        <Center>
          <RatioLabel/>
        </Center>
      </Table.Td>
      <Table.Td width={200}>
        <Stack gap="sm">
          <ProgressDisplay/>
          <StatusLabel/>
        </Stack>
      </Table.Td>
      <Table.Td width={300}>
        <Group justify="space-between">
          <TorrentControls/>
          <TorrentMenu/>
        </Group>
      </Table.Td>
    </Table.Tr>
  );
}
