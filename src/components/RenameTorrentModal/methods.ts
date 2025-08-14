import { basename as getFileName } from 'path-browserify';
import { type Torrent } from '../../types';
import { type ParseTorrentLocationResult } from './types';

export function parseTorrentLocation(torrent: Torrent): ParseTorrentLocationResult {
  const name: string = getFileName(torrent.name);

  return {
    name
  };
}
