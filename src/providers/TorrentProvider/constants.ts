import { TorrentStatus } from '@brielov/transmission-rpc';
import { type Torrent } from '../../types';
import { type TorrentValue } from './types';

export const DEFAULT_TORRENT: Torrent = {
  id: 0,
  name: '',
  percentComplete: 0,
  status: TorrentStatus.Stopped,
  eta: 0,
  uploadRatio: 0,
  rateUpload: 0,
  rateDownload: 0,
  uploadedEver: 0,
  downloadedEver: 0
};

export const INITIAL_VALUE: TorrentValue = {
  torrent: DEFAULT_TORRENT
};
