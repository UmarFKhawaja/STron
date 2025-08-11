import { Box, RingProgress, Text } from '@mantine/core';
import { useTorrent } from '../../../../../../../../providers';
import classes from './styles.module.css';

export function ProgressDisplay() {
  const { torrent } = useTorrent();

  const doneProportion: number = torrent.percentComplete * 100;

  return (
    <Box className={classes.ring}>
      <RingProgress
        roundCaps
        thickness={6}
        size={150}
        sections={[{ value: doneProportion, color: doneProportion < 100 ? 'blue' : 'green' }]}
        label={
          <div>
            <Text ta="center" fz="lg" className={classes.label}>
              {doneProportion.toFixed(0)}%
            </Text>
            <Text ta="center" fz="xs" c="dimmed">
              Completed
            </Text>
          </div>
        }
      />
    </Box>
  );
}
