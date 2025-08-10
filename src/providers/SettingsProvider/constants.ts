import { type Layout } from '../../types';
import { type SettingsState, type SettingsValue } from './types';

export const DEFAULT_LAYOUT: Layout = 'TABLE';

export const INITIAL_STATE: SettingsState = {
  layout: DEFAULT_LAYOUT
};

export const INITIAL_VALUE: SettingsValue = {
  ...INITIAL_STATE,
  setGridLayout(): void {
  },
  setTableLayout(): void {
  },
  setTileLayout(): void {
  }
};
