import { Progress } from '@mantine/core';
import { type ProgressDisplayProps } from './props';
import classes from './styles.module.css';

export function ProgressDisplay({ torrent }: ProgressDisplayProps) {
  const doneProportion: number = torrent.percentComplete * 100;
  const notDoneProportion: number = 100 - doneProportion;

  return (
    <Progress.Root size="xl">
      {
        doneProportion > 0 && (
          <Progress.Section
            className={classes.progressSection}
            value={doneProportion}
            color="green"
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
