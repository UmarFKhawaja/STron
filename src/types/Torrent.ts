import { type Torrent as TorrentType } from '@brielov/transmission-rpc';

export type Torrent = Pick<TorrentType,
  | 'id'
  | 'name'
  | 'percentComplete'
  | 'totalSize'
  | 'status'
  | 'eta'
  | 'uploadRatio'
  | 'rateUpload'
  | 'rateDownload'
  | 'uploadedEver'
  | 'downloadedEver'
  | 'magnetLink'
  | 'queuePosition'
  | 'recheckProgress'
  | 'downloadDir'
  | 'labels'
>;

export type TorrentKeys = keyof Torrent;
