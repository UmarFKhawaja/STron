import { type Torrent } from '../../types';
import { TorrentRow } from '../TorrentRow';
import { TorrentRows } from '../TorrentRows';
import { TorrentsTable } from '../TorrentsTable';

export function TorrentsView() {
  return (
    <TorrentsTable>
      {
        (torrents: Torrent[]) => (
          <TorrentRows torrents={torrents}>
            {
              (torrent: Torrent) => (
                <TorrentRow torrent={torrent}/>
              )
            }
          </TorrentRows>
        )
      }
    </TorrentsTable>
  );
}
