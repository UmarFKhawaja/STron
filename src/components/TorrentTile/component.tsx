import { type TorrentTileProps } from './props';

export function TorrentTile({ torrent }: TorrentTileProps) {
  return (
    <pre>
      {JSON.stringify(torrent, null, 2)}
    </pre>
  );
}
