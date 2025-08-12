import { TorrentProvider } from '../../providers';
import { type Torrent } from '../../types';
import { TorrentRow } from '../TorrentRow';
import { type TorrentRowsProps } from './props';

export function TorrentRows({ torrents }: TorrentRowsProps) {
  return torrents.map((torrent: Torrent) => (
    <TorrentProvider key={`torrent-${torrent.id}`} torrent={torrent}>
      <TorrentRow/>
    </TorrentProvider>
  ));
}
