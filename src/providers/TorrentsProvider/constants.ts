import { type TorrentsState, type TorrentsValue } from './types';

export const INITIAL_STATE: TorrentsState = {
  torrents: []
};

export const INITIAL_VALUE: TorrentsValue = {
  ...INITIAL_STATE,
  refreshTorrents: async (): Promise<void> => {
  }
};
