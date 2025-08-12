import { type Torrent } from '../../types';

export interface ActionsValue {
  fetchTorrents(): Promise<Torrent[]>;
  startAllTorrents(torrents: Torrent[]): Promise<void>;
  stopAllTorrents(torrents: Torrent[]): Promise<void>;
  startTorrent(torrent: Torrent): Promise<void>;
  stopTorrent(torrent: Torrent): Promise<void>;
  moveTorrentUp(torrent: Torrent): Promise<void>;
  moveTorrentDown(torrent: Torrent): Promise<void>;
  moveTorrentToTop(torrent: Torrent): Promise<void>;
  moveTorrentToBottom(torrent: Torrent): Promise<void>;
  copyTorrentLink(torrent: Torrent): Promise<void>;
  verifyTorrentLocalData(torrent: Torrent): Promise<void>;
  setTorrentLocation(torrent: Torrent, location: string): Promise<void>;
  renameTorrent(torrent: Torrent, name: string): Promise<void>;
  editTorrentLabels(torrent: Torrent): Promise<void>;
  addTorrent(magnetLink: string): Promise<void>;
  removeTorrent(torrent: Torrent): Promise<void>;
  removeTorrentAndDeleteFiles(torrent: Torrent): Promise<void>;
  askTorrentTrackerForMorePeers(torrent: Torrent): Promise<void>;
}
