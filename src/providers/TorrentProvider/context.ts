import { type Context, createContext } from 'react';
import { INITIAL_VALUE } from './constants';
import { type TorrentValue } from './types';

export const TorrentContext: Context<TorrentValue> = createContext<TorrentValue>(INITIAL_VALUE);
