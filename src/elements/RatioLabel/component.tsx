import { Badge } from '@mantine/core';
import { useTorrent } from '../../providers';
import { formatFraction } from './methods';

export function RatioLabel() {
  const { torrent } = useTorrent();

  return (
    <Badge color={torrent.uploadRatio < 1 ? 'orange' : 'grape'}>
      {
        formatFraction(torrent.uploadRatio)
      }
    </Badge>
  );
}
