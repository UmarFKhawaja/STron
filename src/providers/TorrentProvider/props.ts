import { type PropsWithChildren } from 'react';
import { type Torrent } from '../../types';

export interface TorrentProviderProps extends PropsWithChildren {
  torrent: Torrent;
}
