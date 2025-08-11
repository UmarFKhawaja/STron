import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function formatETA(eta: number): string {
  return eta < 0
    ? 'Done'
    : dayjs().add(eta, 'seconds').fromNow(true);
}
