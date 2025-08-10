import { useContext } from 'react';
import { TorrentContext } from './context';
import { type TorrentValue } from './types';

export function useTorrent(): TorrentValue {
  return useContext(TorrentContext);
}
