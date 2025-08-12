import { Group, Paper, Stack, Text } from '@mantine/core';
import {
  ETALabel,
  InfoDisplay,
  ItemControls,
  ItemMenu,
  ProgressDisplay,
  RatioLabel,
  StatusLabel
} from '../../elements';
import { useTorrent } from '../../providers';

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
        <ItemControls/>
        <ItemMenu/>
      </Group>
    </Paper>
  );
}
