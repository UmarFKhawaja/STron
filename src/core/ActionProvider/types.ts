import { type Torrent } from '../../types';

export interface ActionValue {
  fetchTorrents(): Promise<Torrent[]>;
}
