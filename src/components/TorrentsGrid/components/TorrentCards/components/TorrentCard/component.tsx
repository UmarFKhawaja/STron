import { Group, Paper, Stack, Text } from '@mantine/core';
import { ETALabel, InfoDisplay, ProgressDisplay, RatioLabel, StatusLabel } from '../../../../../../elements';
import { useTorrent } from '../../../../../../providers';
import { TorrentControls } from '../../../../../TorrentControls';
import { TorrentMenu } from '../../../../../TorrentMenu';

export function TorrentCard() {
  const { torrent } = useTorrent();

  return (
    <Paper withBorder p="lg">
      <Stack gap="sm">
        <Text size="lg" fw={600}>
          {torrent.name}
        </Text>
        <Group gap="sm" justify="space-between">
          <Stack gap="sm" align="start">
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
            <StatusLabel/>
          </Stack>
          <ProgressDisplay variant="ring"/>
        </Group>
      </Stack>
      <Group gap="sm">
        <TorrentControls/>
        <TorrentMenu/>
      </Group>
    </Paper>
  );
}
