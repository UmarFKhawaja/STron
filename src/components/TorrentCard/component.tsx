import { type TorrentCardProps } from './props';

export function TorrentCard({ torrent }: TorrentCardProps) {
  return (
    <pre>
      {JSON.stringify(torrent, null, 2)}
    </pre>
  );
}
