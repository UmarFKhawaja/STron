import { type Torrent } from '../../types';

export interface ActionsValue {
  fetchTorrents(): Promise<Torrent[]>;
  startAllTorrents(): Promise<void>;
  stopAllTorrents(): Promise<void>;
  startTorrent(id: number): Promise<void>;
  stopTorrent(id: number): Promise<void>;
  moveTorrentUp(id: number): Promise<void>;
  moveTorrentDown(id: number): Promise<void>;
  moveTorrentToTop(id: number): Promise<void>;
  moveTorrentToBottom(id: number): Promise<void>;
  copyTorrentLink(id: number): Promise<void>;
  verifyTorrentLocalData(id: number): Promise<void>;
  setTorrentLocation(id: number): Promise<void>;
  renameTorrent(id: number): Promise<void>;
  editTorrentLabels(id: number): Promise<void>;
  removeTorrent(id: number): Promise<void>;
  removeTorrentAndDeleteFiles(id: number): Promise<void>;
  askTorrentTrackerForMorePeers(id: number): Promise<void>;
}
