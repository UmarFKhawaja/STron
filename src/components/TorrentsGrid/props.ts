import { type ReactNode } from 'react';
import { type Torrent } from '../../types';

export interface TorrentsGridProps {
  children: (torrents: Torrent[]) => ReactNode;
}
