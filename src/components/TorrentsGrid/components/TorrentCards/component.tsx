import { type Torrent } from '../../../../types';
import { TorrentCard } from './components';
import { type TorrentCardsProps } from './props';

export function TorrentCards({ torrents }: TorrentCardsProps) {
  return torrents.map((torrent: Torrent, index: number) => (
    <TorrentCard key={`torrent-${index}`} torrent={torrent}/>
  ));
}
