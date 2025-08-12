import { Card, Group, Stack, Text } from '@mantine/core';
import {
  ETALabel,
  InfoDisplay,
  ItemControls,
  ItemMenu,
  ProgressDisplay,
  RatioLabel,
  StatusLabel
} from '../../../../../../elements';
import { useTorrent } from '../../../../../../providers';

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
        <ProgressDisplay variant="bar"/>
        <Group justify="space-between">
          <ItemControls/>
          <ItemMenu/>
        </Group>
      </Stack>
    </Card>
  );
}
