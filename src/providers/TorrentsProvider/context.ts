import { type Context, createContext } from 'react';
import { type TorrentsValue } from './types';

export const TorrentsContext: Context<TorrentsValue> = createContext<TorrentsValue>({
  torrents: [],
  refreshTorrents: async (): Promise<void> => {
  }
});
