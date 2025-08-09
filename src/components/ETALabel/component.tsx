import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {Text} from '@mantine/core';
import { type ETALabelProps } from './props';

dayjs.extend(relativeTime);

export function ETALabel({ torrent }: ETALabelProps) {
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
