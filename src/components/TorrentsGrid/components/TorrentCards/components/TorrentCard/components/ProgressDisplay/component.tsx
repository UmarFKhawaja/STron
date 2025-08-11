import { RingProgress, Text } from '@mantine/core';
import { useTorrent } from '../../../../../../../../providers';

export function ProgressDisplay() {
  const { torrent } = useTorrent();

  const doneProportion: number = torrent.percentComplete * 100;

  return (
    <RingProgress
      roundCaps
      thickness={6}
      size={150}
      sections={[{ value: doneProportion, color: doneProportion < 100 ? 'blue' : 'green' }]}
      label={
        <div>
          <Text ta="center" fz="lg" fw={700} lh={1}>
            {doneProportion.toFixed(0)}%
          </Text>
          <Text ta="center" fz="xs" c="dimmed">
            Completed
          </Text>
        </div>
      }
    />
  );
}
