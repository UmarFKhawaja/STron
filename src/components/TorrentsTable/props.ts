import { type ReactNode } from 'react';
import { type Torrent } from '../../types';

export interface TorrentsTableProps {
  headings: string[];
  children: (torrents: Torrent[]) => ReactNode;
}
