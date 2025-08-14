import { Card, Group, Stack } from '@mantine/core';
import {
  ETALabel,
  InfoDisplay,
  ItemControls,
  ItemMenu,
  LabelDisplay,
  NameLabel,
  ProgressDisplay,
  RatioLabel,
  StatusLabel
} from '../../elements';

export function TorrentTile() {
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
        <NameLabel/>
        <LabelDisplay/>
        <Group gap="xs">
          <InfoDisplay mode="percentageDone"/>
          <InfoDisplay mode="totalSize"/>
          <InfoDisplay mode="downloadedBytes"/>
          <InfoDisplay mode="uploadedBytes"/>
          <InfoDisplay mode="downloadRate"/>
          <InfoDisplay mode="uploadRate"/>
        </Group>
        <ProgressDisplay variant="bar"/>
        <Group gap="xs" justify="space-between">
          <Group gap="xs">
            <ItemControls/>
          </Group>
          <ItemMenu/>
        </Group>
      </Stack>
    </Card>
  );
}
