import { type Layout } from '../../types';

export interface SettingsState {
  interval: number;
  layout: Layout;
}

export interface SettingsValue extends SettingsState {
  decreaseInterval(): void;
  increaseInterval(): void;
  setGridLayout(): void;
  setTableLayout(): void;
  setListLayout(): void;
}

export type SettingsAction = SetIntervalSettingsAction | SetLayoutSettingsAction;

export interface SetIntervalSettingsAction {
  type: 'SET_INTERVAL';
  interval: number;
}

export interface SetLayoutSettingsAction {
  type: 'SET_LAYOUT';
  layout: Layout;
}
