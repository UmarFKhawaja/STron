import { type Layout } from '../../types';

export interface SettingsState {
  layout: Layout;
}

export interface SettingsValue extends SettingsState {
  setGridLayout(): void;
  setTableLayout(): void;
  setListLayout(): void;
}

export type SettingsAction = SetLayoutSettingsAction;

export interface SetLayoutSettingsAction {
  type: 'SET_LAYOUT';
  layout: Layout;
}
