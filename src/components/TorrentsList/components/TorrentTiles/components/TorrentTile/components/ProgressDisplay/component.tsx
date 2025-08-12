import { Progress } from '@mantine/core';
import { useTorrent } from '../../../../../../../../providers';
import classes from './styles.module.css';
import { TorrentStatus } from '@brielov/transmission-rpc';

export function ProgressDisplay() {
  const { torrent } = useTorrent();

  const doneProportion: number = torrent.status === TorrentStatus.Verifying
    ? torrent.recheckProgress * 100
    : torrent.percentComplete * 100;
  const notDoneProportion: number = 100 - doneProportion;

  const notDoneColor: string = torrent.status === TorrentStatus.Verifying
    ? 'yellow'
    : 'blue';

  return (
    <Progress.Root size="xl" my="xl">
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
}
