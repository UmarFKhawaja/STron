import { TorrentStatus } from '@brielov/transmission-rpc';
import { Progress, RingProgress, Text } from '@mantine/core';
import { useTorrent } from '../../providers';
import { type ProgressDisplayProps } from './props';
import classes from './styles.module.css';

export function ProgressDisplay({ variant, flush = false }: ProgressDisplayProps) {
  const { torrent } = useTorrent();

  const doneProportion: number = torrent.status === TorrentStatus.Verifying
    ? torrent.recheckProgress * 100
    : torrent.percentComplete * 100;
  const notDoneProportion: number = 100 - doneProportion;

  const notDoneColor: string = torrent.status === TorrentStatus.Verifying
    ? 'yellow'
    : 'blue';

  const labelText: string = torrent.status === TorrentStatus.Verifying
    ? 'Verified'
    : 'Completed';

  if (variant === 'bar') {
    return (
      <Progress.Root size="xl" my={flush ? 0 : 'xl'}>
        {
          doneProportion > 0 && (
            <Progress.Section
              className={classes.progressSection}
              value={doneProportion}
              color={doneProportion < 100 ? notDoneColor : 'green'}
            />
          )
        }
        {
          notDoneProportion > 0 && (
            <Progress.Section
              className={classes.progressSection}
              value={notDoneProportion}
              color="gray"
            />
          )
        }
      </Progress.Root>
    );
  } else if (variant === 'ring') {
    return (
      <RingProgress
        roundCaps
        thickness={6}
        size={150}
        sections={[{ value: doneProportion, color: doneProportion < 100 ? notDoneColor : 'green' }]}
        label={
          <div>
            <Text ta="center" fz="lg" fw={700} lh={1}>
              {doneProportion.toFixed(0)}%
            </Text>
            <Text ta="center" fz="xs" c="dimmed">
              {labelText}
            </Text>
          </div>
        }
      />
    );
  } else {
    return <></>;
  }
}
