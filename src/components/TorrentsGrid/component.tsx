import { useTorrents } from '../../providers';
import { TorrentCards } from './components';

export function TorrentsGrid() {
  const { torrents } = useTorrents();

  return <TorrentCards torrents={torrents}/>;
}
