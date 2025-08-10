import { TorrentProvider } from '../../../../../../providers';
import { type TorrentTileProps } from './props';

export function TorrentTile({ torrent }: TorrentTileProps) {
  return (
    <TorrentProvider torrent={torrent}>
      <pre>
        {JSON.stringify(torrent, null, 2)}
      </pre>
    </TorrentProvider>
  );
}
