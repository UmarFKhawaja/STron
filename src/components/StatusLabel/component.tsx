import { Text } from '@mantine/core';
import { TorrentStatus } from '@brielov/transmission-rpc';
import { useTorrent } from '../../providers';

export function StatusLabel() {
  const { torrent } = useTorrent();

  return (
    <Text>
      {
        TorrentStatus[torrent.status]
      }
    </Text>
  );
}
