import { type Context, createContext } from 'react';
import { INITIAL_VALUE } from './constants';
import { type TorrentsValue } from './types';

export const TorrentsContext: Context<TorrentsValue> = createContext<TorrentsValue>(INITIAL_VALUE);
