import { type Torrent } from '../../types';

export interface ActionsValue {
  fetchTorrents(): Promise<Torrent[]>;
  startAllTorrents(): Promise<void>;
  stopAllTorrents(): Promise<void>;
}
