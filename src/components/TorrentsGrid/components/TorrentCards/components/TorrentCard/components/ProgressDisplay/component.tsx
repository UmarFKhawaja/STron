import { TorrentStatus } from '@brielov/transmission-rpc';
import { RingProgress, Text } from '@mantine/core';
import { useTorrent } from '../../../../../../../../providers';

export function ProgressDisplay() {
  const { torrent } = useTorrent();

  const doneProportion: number = torrent.status === TorrentStatus.Verifying
    ? torrent.recheckProgress * 100
    : torrent.percentComplete * 100;

  const notDoneColor: string = torrent.status === TorrentStatus.Verifying
    ? 'yellow'
    : 'blue';

  const labelText: string = torrent.status === TorrentStatus.Verifying
    ? 'Verified'
    : 'Completed';

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
}
