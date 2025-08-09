import { Group, Progress, Text } from '@mantine/core';
import { type ReceptionDisplayProps } from './props';
import classes from './styles.module.css';

export function ReceptionDisplay({ torrent }: ReceptionDisplayProps) {
  const totalReviews: number = torrent.reviews.positive + torrent.reviews.negative;
  const positiveProportion: number = (torrent.reviews.positive / totalReviews) * 100;
  const negativeProportion: number = (torrent.reviews.negative / totalReviews) * 100;

  return (
    <>
      <Group justify="space-between">
        <Text fz="xs" c="green" fw={700}>
          {positiveProportion.toFixed(0)}%
        </Text>
        <Text fz="xs" c="red" fw={700}>
          {negativeProportion.toFixed(0)}%
        </Text>
      </Group>
      <Progress.Root>
        <Progress.Section
          className={classes.progressSection}
          value={positiveProportion}
          color="green"
        />
        <Progress.Section
          className={classes.progressSection}
          value={negativeProportion}
          color="red"
        />
      </Progress.Root>
    </>
  );
}
