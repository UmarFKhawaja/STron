import { TorrentProvider } from '../../../../providers';
import { type Torrent } from '../../../../types';
import { TorrentTile } from './components';
import { type TorrentTilesProps } from './props';

export function TorrentTiles({ torrents }: TorrentTilesProps) {
  return torrents.map((torrent: Torrent, index: number) => (
    <TorrentProvider key={`torrent-${index}`} torrent={torrent}>
      <TorrentTile/>
    </TorrentProvider>
  ));
}
