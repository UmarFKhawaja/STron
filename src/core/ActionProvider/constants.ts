import { type Torrent } from '../../types';
import { type ActionValue } from './types';

export const INITIAL_VALUE: ActionValue = {
  fetchTorrents: async (): Promise<Torrent[]> => {
    return [];
  }
};
