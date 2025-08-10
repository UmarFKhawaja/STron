import { type Torrent } from '../../types';
import { type ActionsValue } from './types';

export const INITIAL_VALUE: ActionsValue = {
  fetchTorrents: async (): Promise<Torrent[]> => {
    return [];
  },
  startAllTorrents: async (): Promise<void> => {
  },
  stopAllTorrents: async (): Promise<void> => {
  },
  startTorrent: async (): Promise<void> => {
  },
  stopTorrent: async (): Promise<void> => {
  },
  moveTorrentUp: async (): Promise<void> => {
  },
  moveTorrentDown: async (): Promise<void> => {
  },
  moveTorrentToTop: async (): Promise<void> => {
  },
  moveTorrentToBottom: async (): Promise<void> => {
  },
  copyTorrentLink: async (): Promise<void> => {
  },
  verifyTorrentLocalData: async (): Promise<void> => {
  },
  setTorrentLocation: async (): Promise<void> => {
  },
  renameTorrent: async (): Promise<void> => {
  },
  editTorrentLabels: async (): Promise<void> => {
  },
  removeTorrent: async (): Promise<void> => {
  },
  removeTorrentAndDeleteFiles: async (): Promise<void> => {
  },
  askTorrentTrackerForMorePeers: async (): Promise<void> => {
  }
};
