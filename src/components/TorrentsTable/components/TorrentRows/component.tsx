import { type Torrent } from '../../../../types';
import { TorrentRow } from './components';
import { type TorrentRowsProps } from './props';

export function TorrentRows({ torrents }: TorrentRowsProps) {
  return torrents.map((torrent: Torrent, index: number) => (
    <TorrentRow key={`torrent-${index}`} torrent={torrent}/>
  ));
}
