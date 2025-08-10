import { TorrentProvider } from '../../../../../../providers';
import { type TorrentCardProps } from './props';

export function TorrentCard({ torrent }: TorrentCardProps) {
  return (
    <TorrentProvider torrent={torrent}>
      <pre>
        {JSON.stringify(torrent, null, 2)}
      </pre>
    </TorrentProvider>
  );
}
