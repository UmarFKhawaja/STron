import { useContext } from 'react';
import { SettingsContext } from './context';
import { type SettingsValue } from './types';

export function useSettings(): SettingsValue {
  return useContext(SettingsContext);
}
