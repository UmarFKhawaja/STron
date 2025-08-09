import { type Context, createContext } from 'react';
import { type Torrent } from '../../types';
import { type ActionValue } from './types';

export const ActionContext: Context<ActionValue> = createContext<ActionValue>({
  fetchTorrents: async (): Promise<Torrent[]> => {
    return [];
  }
});
