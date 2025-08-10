import { type Torrent as TorrentType } from '@brielov/transmission-rpc';

export type Torrent = Pick<TorrentType,
  | 'id'
  | 'name'
  | 'percentComplete'
  | 'status'
  | 'eta'
  | 'uploadRatio'
  | 'rateUpload'
  | 'rateDownload'
  | 'uploadedEver'
  | 'downloadedEver'
>;

export type TorrentKeys = keyof Torrent;
