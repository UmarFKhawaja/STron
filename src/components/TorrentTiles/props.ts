import { type ReactNode } from 'react';
import { type Torrent } from '../../types';

export interface TorrentTilesProps {
  torrents: Torrent[];
  children: (torrent: Torrent) => ReactNode;
}
