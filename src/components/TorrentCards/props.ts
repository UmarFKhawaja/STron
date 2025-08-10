import { type ReactNode } from 'react';
import { type Torrent } from '../../types';

export interface TorrentCardsProps {
  torrents: Torrent[];
  children: (torrent: Torrent) => ReactNode;
}
