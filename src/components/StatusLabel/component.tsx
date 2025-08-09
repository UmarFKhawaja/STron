import { Text } from '@mantine/core';
import { TorrentStatus } from '@brielov/transmission-rpc';
import { type StatusLabelProps } from './props';

export function StatusLabel({ torrent }: StatusLabelProps) {
  return (
    <Text>
      {
        TorrentStatus[torrent.status]
      }
    </Text>
  );
}
