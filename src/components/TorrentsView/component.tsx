import { useSettings } from '../../providers';
import { TorrentsGrid } from '../TorrentsGrid';
import { TorrentsList } from '../TorrentsList';
import { TorrentsTable } from '../TorrentsTable';

export function TorrentsView() {
  const { layout } = useSettings();

  switch (layout) {
    case 'GRID':
      return <TorrentsGrid/>;

    case 'TABLE':
      return <TorrentsTable/>;

    case 'LIST':
      return <TorrentsList/>;

    default:
      return <></>;
  }
}
