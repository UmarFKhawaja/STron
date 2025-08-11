import { Box, Group, Paper, Stack, Text } from '@mantine/core';
import { useTorrent } from '../../../../../../providers';
import { TorrentControls } from '../../../../../TorrentControls';
import { TorrentMenu } from '../../../../../TorrentMenu';
import { ETALabel, InfoDisplay, ProgressDisplay, RatioLabel, StatusLabel } from './components';
import classes from './styles.module.css';

export function TorrentCard() {
  const { torrent } = useTorrent();

  console.log(torrent);

  return (
    <Paper withBorder p="lg">
      <Box className={classes.inner}>
        <Stack gap="sm">
          <Text size="lg" fw={600}>
            {torrent.name}
          </Text>
          <Group gap="sm">
            <InfoDisplay mode="downloadedBytes"/>
            <InfoDisplay mode="uploadedBytes"/>
            <InfoDisplay mode="downloadRate"/>
            <InfoDisplay mode="uploadRate"/>
          </Group>
          <Group gap="sm">
            <ETALabel/>
            <RatioLabel/>
          </Group>
          <Group gap="sm">
            <StatusLabel/>
          </Group>
        </Stack>
        <ProgressDisplay/>
      </Box>
      <Group gap="sm">
        <TorrentControls/>
        <TorrentMenu/>
      </Group>
    </Paper>
  );
}
