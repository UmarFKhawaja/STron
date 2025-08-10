import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Text } from '@mantine/core';
import { useTorrent } from '../../../../../../../../providers';

dayjs.extend(relativeTime);

export function ETALabel() {
  const { torrent } = useTorrent();

  return (
    <Text>
      {
        torrent.eta < 0
          ? 'Done'
          : dayjs(torrent.eta).fromNow()
      }
    </Text>
  );
}
