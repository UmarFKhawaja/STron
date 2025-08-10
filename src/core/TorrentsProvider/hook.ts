import { useContext } from 'react';
import { TorrentsContext } from './context';
import { type TorrentsValue } from './types';

export function useTorrents(): TorrentsValue {
  return useContext(TorrentsContext);
}
