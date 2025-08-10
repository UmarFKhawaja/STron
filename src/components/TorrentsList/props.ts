import { type ReactNode } from 'react';
import { type Torrent } from '../../types';

export interface TorrentsListProps {
  children: (torrents: Torrent[]) => ReactNode;
}
