import { type ReactNode } from 'react';
import { type Torrent } from '../../types';

export interface TorrentsTableProps {
  children: (torrents: Torrent[]) => ReactNode;
}
