import { useTorrents } from '../../providers';
import { type TorrentsListProps } from './props';

export function TorrentsList({ children }: TorrentsListProps) {
  const { torrents } = useTorrents();

  return children(torrents);
}
