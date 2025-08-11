import { Badge } from '@mantine/core';
import { useTorrent } from '../../../../../../../../providers';
import { formatETA } from './methods';

export function ETALabel() {
  const { torrent } = useTorrent();

  return (
    <Badge color={torrent.eta === -1 ? 'blue' : 'gray'}>
      {
        formatETA(torrent.eta)
      }
    </Badge>
  );
}
