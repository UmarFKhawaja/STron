import { PrivateLayout, TorrentRow, TorrentRows, TorrentTable } from '../../components';
import { type Torrent } from '../../types';

export function AppPresenter() {
  return (
    <PrivateLayout>
      <TorrentTable
        headings={[
          'Title',
          'Author',
          'Year',
          'Reviews',
          'Reception'
        ]}
      >
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
      </TorrentTable>
    </PrivateLayout>
  );
}
