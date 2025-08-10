import { TorrentProvider } from '../../../../providers';
import { type Torrent } from '../../../../types';
import { TorrentRow } from './components';
import { type TorrentRowsProps } from './props';

export function TorrentRows({ torrents }: TorrentRowsProps) {
  return torrents.map((torrent: Torrent, index: number) => (
    <TorrentProvider key={`torrent-${index}`} torrent={torrent}>
      <TorrentRow/>
    </TorrentProvider>
  ));
}
