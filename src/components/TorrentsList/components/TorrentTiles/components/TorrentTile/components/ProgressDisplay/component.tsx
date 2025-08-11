import { Progress } from '@mantine/core';
import { useTorrent } from '../../../../../../../../providers';
import classes from './styles.module.css';

export function ProgressDisplay() {
  const { torrent } = useTorrent();

  const doneProportion: number = torrent.percentComplete * 100;
  const notDoneProportion: number = 100 - doneProportion;

  return (
    <Progress.Root size="xl" my="xl">
      {
        doneProportion > 0 && (
          <Progress.Section
            className={classes.progressSection}
            value={doneProportion}
            color={doneProportion < 100 ? 'blue' : 'green'}
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
}
