import { Group, Paper, Stack, Text } from '@mantine/core';
import { useTorrent } from '../../../../../../providers';
import { TorrentControls } from '../../../../../TorrentControls';
import { TorrentMenu } from '../../../../../TorrentMenu';
import { ETALabel, InfoDisplay, ProgressDisplay, RatioLabel, StatusLabel } from './components';

export function TorrentCard() {
  const { torrent } = useTorrent();

  return (
    <Paper withBorder p="lg">
      <Stack gap="sm">
        <Text size="lg" fw={600}>
          {torrent.name}
        </Text>
        <Group gap="sm" justify="space-between">
          <Stack gap="sm">
            <Group gap="sm">
              <ETALabel/>
              <RatioLabel/>
            </Group>
            <Group gap="sm">
              <InfoDisplay mode="downloadedBytes"/>
              <InfoDisplay mode="uploadedBytes"/>
              <InfoDisplay mode="downloadRate"/>
              <InfoDisplay mode="uploadRate"/>
            </Group>
          </Stack>
          <ProgressDisplay/>
        </Group>
      </Stack>
      <Group gap="sm" justify="space-between">
        <Group gap="sm">
          <TorrentControls/>
          <TorrentMenu/>
        </Group>
        <StatusLabel/>
      </Group>
    </Paper>
  );
}
