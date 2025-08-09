import { type ReactNode } from 'react';
import { type Torrent } from '../../types';

export interface TorrentRowsProps {
  torrents: Torrent[];
  children: (torrent: Torrent) => ReactNode;
}
