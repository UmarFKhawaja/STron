import { type Torrent } from '../../types';

export interface TorrentsState {
  torrents: Torrent[];
}

export interface TorrentsValue extends TorrentsState {
  refreshTorrents(): Promise<void>;
}

export type TorrentsAction = UpdateTorrentsTorrentsAction;

export interface UpdateTorrentsTorrentsAction {
  type: 'UPDATE_TORRENTS';
  torrents: Torrent[];
}
