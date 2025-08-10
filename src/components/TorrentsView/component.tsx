import { useSettings } from '../../providers';
import { type Torrent } from '../../types';
import { TorrentCard } from '../TorrentCard';
import { TorrentCards } from '../TorrentCards';
import { TorrentRow } from '../TorrentRow';
import { TorrentRows } from '../TorrentRows';
import { TorrentsGrid } from '../TorrentsGrid';
import { TorrentsList } from '../TorrentsList';
import { TorrentsTable } from '../TorrentsTable';
import { TorrentTile } from '../TorrentTile';
import { TorrentTiles } from '../TorrentTiles';

export function TorrentsView() {
  const { layout } = useSettings();

  switch (layout) {
    case 'GRID':
      return (
        <TorrentsGrid>
          {
            (torrents: Torrent[]) => (
              <TorrentCards torrents={torrents}>
                {
                  (torrent: Torrent) => (
                    <TorrentCard torrent={torrent}/>
                  )
                }
              </TorrentCards>
            )
          }
        </TorrentsGrid>
      );

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

    case 'LIST':
      return (
        <TorrentsList>
          {
            (torrents: Torrent[]) => (
              <TorrentTiles torrents={torrents}>
                {
                  (torrent: Torrent) => (
                    <TorrentTile torrent={torrent}/>
                  )
                }
              </TorrentTiles>
            )
          }
        </TorrentsList>
      );

    default:
      return <></>;
  }
}
