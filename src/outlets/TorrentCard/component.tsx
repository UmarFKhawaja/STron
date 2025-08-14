import { Group, Paper, SimpleGrid as Grid, Stack } from '@mantine/core';
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

export function TorrentCard() {
  return (
    <Paper withBorder p="lg">
      <Stack gap="sm">
        <NameLabel/>
        <LabelDisplay/>
        <Group gap="sm" justify="space-between">
          <Stack gap="sm" align="start">
            <Grid cols={2}>
              <InfoDisplay mode="totalSize"/>
              <Group gap="sm">
                <ETALabel/>
                <RatioLabel/>
              </Group>
              <InfoDisplay mode="downloadedBytes"/>
              <InfoDisplay mode="uploadedBytes"/>
              <InfoDisplay mode="downloadRate"/>
              <InfoDisplay mode="uploadRate"/>
            </Grid>
            <StatusLabel space/>
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
