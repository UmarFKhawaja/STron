import { useTorrents } from '../../providers';
import { type TorrentsGridProps } from './props';

export function TorrentsGrid({ children }: TorrentsGridProps) {
  const { torrents } = useTorrents();

  return children(torrents);
}
