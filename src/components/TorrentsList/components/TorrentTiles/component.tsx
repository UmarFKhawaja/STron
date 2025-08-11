import { TorrentProvider } from '../../../../providers';
import { type Torrent } from '../../../../types';
import { TorrentTile } from './components';
import { type TorrentTilesProps } from './props';

export function TorrentTiles({ torrents }: TorrentTilesProps) {
  return torrents.map((torrent: Torrent) => (
    <TorrentProvider key={`torrent-${torrent.id}`} torrent={torrent}>
      <TorrentTile/>
    </TorrentProvider>
  ));
}
