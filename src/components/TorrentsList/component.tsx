import { useTorrents } from '../../providers';
import { TorrentTiles } from './components';

export function TorrentsList() {
  const { torrents } = useTorrents();

  return <TorrentTiles torrents={torrents}/>;
}
