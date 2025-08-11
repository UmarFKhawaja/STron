import { Card, Group, Stack, Text } from '@mantine/core';
import { useTorrent } from '../../../../../../providers';
import { TorrentControls } from '../../../../../TorrentControls';
import { TorrentMenu } from '../../../../../TorrentMenu';
import { InfoDisplay } from '../../../../../TorrentsTable/components/TorrentRows/components/TorrentRow/components';
import { ETALabel, ProgressDisplay, RatioLabel, StatusLabel } from './components';

export function TorrentTile() {
  const { torrent } = useTorrent();

  return (
    <Card withBorder padding="lg" radius="md">
      <Stack gap="sm">
        <Group gap="sm" justify="space-between">
          <Group gap="sm">
            <ETALabel/>
            <RatioLabel/>
          </Group>
          <StatusLabel/>
        </Group>
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
        <ProgressDisplay/>
        <Group justify="space-between">
          <TorrentControls/>
          <TorrentMenu/>
        </Group>
      </Stack>
    </Card>
  );
}
