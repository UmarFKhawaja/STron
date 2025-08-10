import { type Torrent } from '../../types';
import { type ActionsValue } from './types';

export const INITIAL_VALUE: ActionsValue = {
  fetchTorrents: async (): Promise<Torrent[]> => {
    return [];
  },
  startAllTorrents: async (): Promise<void> => {
  },
  stopAllTorrents: async (): Promise<void> => {
  }
};
