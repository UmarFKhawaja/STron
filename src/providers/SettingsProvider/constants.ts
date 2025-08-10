import { type Layout } from '../../types';
import { type SettingsState, type SettingsValue } from './types';

export const DEFINED_INTERVALS: number[] = [
  1000,
  2000,
  5000,
  10000,
  30000,
  60000
];

export const DEFAULT_INTERVAL: number = 1000;

export const DEFAULT_LAYOUT: Layout = 'TABLE';

export const INITIAL_STATE: SettingsState = {
  interval: DEFAULT_INTERVAL,
  layout: DEFAULT_LAYOUT
};

export const INITIAL_VALUE: SettingsValue = {
  ...INITIAL_STATE,
  decreaseInterval(): void {
  },
  increaseInterval(): void {
  },
  setGridLayout(): void {
  },
  setTableLayout(): void {
  },
  setListLayout(): void {
  }
};
