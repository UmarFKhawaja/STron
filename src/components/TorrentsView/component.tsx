import { useSettings } from '../../providers';
import { type Torrent } from '../../types';
import { TorrentRow } from '../TorrentRow';
import { TorrentRows } from '../TorrentRows';
import { TorrentsTable } from '../TorrentsTable';

export function TorrentsView() {
  const { layout } = useSettings();

  switch (layout) {
    case 'GRID':
      return <></>;

    case 'TABLE':
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

    case 'TILE':
      return <></>;

    default:
      return <></>;
  }
}
