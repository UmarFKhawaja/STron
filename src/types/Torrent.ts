import { type Torrent as TorrentType } from '@brielov/transmission-rpc';

export type TorrentKeys = 'id' | 'name' | 'percentComplete' | 'status' | 'eta';

export type Torrent = Pick<TorrentType, TorrentKeys>;
