import { type ReactNode } from 'react';
import { type Torrent } from '../../types';

export interface TorrentTableProps {
  headings: string[];
  children: (torrents: Torrent[]) => ReactNode;
}
