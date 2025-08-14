import {
  basename as getFileName,
  dirname as getDirectoryName,
  join as joinPath,
  resolve as resolvePath
} from 'path-browserify';
import { config } from '../../config';
import { type Torrent } from '../../types';
import { type ParseTorrentLocationResult } from './types';

export function isTorrentLocationAllowable(name: string, folder: string): boolean {
  const location: string = resolvePath(joinPath(folder, name));

  return config.availableFolders.some((availableFolder: string) => location.startsWith(availableFolder));
}

export function makeTorrentLocation(name: string, folder: string): string {
  const location: string = resolvePath(joinPath(folder, name));

  return location;
}

export function parseTorrentLocation(torrent: Torrent): ParseTorrentLocationResult {
  const torrentLocation: string = joinPath(torrent.downloadDir, torrent.name);

  const availableFolder: string = config.availableFolders
    .find((availableFolder: string): boolean => torrentLocation.startsWith(availableFolder)) ?? '';

  let name: string;
  let folder: string;
  let availableFolders: string[];

  if (availableFolder) {
    name = torrentLocation.slice(availableFolder.length + 1);
    folder = torrentLocation.slice(0, availableFolder.length);
    availableFolders = config.availableFolders;
  } else {
    name = getFileName(torrentLocation);
    folder = getDirectoryName(torrentLocation);
    availableFolders = [
      ...config.availableFolders,
      availableFolder
    ];
  }

  return {
    name,
    folder: {
      value: folder,
      label: folder
    },
    availableFolders
  };
}
