import { Group, SimpleGrid as Grid, Stack, Table } from '@mantine/core';
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

export function TorrentRow() {
  return (
    <Table.Tr>
      <Table.Td>
        <Stack gap="sm">
          <NameLabel/>
          <LabelDisplay/>
          <ProgressDisplay variant="bar" flush/>
          <StatusLabel/>
        </Stack>
      </Table.Td>
      <Table.Td>
        <Grid cols={2}>
          <ETALabel/>
          <RatioLabel/>
          <InfoDisplay mode="percentageDone"/>
          <InfoDisplay mode="totalSize"/>
          <InfoDisplay mode="downloadedBytes"/>
          <InfoDisplay mode="uploadedBytes"/>
          <InfoDisplay mode="downloadRate"/>
          <InfoDisplay mode="uploadRate"/>
        </Grid>
      </Table.Td>
      <Table.Td>
        <Group justify="space-between">
          <ItemControls/>
          <ItemMenu/>
        </Group>
      </Table.Td>
    </Table.Tr>
  );
}
