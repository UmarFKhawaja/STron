import { type SettingsAction, type SettingsState } from './types';

export function reduce(oldState: SettingsState, action: SettingsAction): SettingsState {
  let newState: SettingsState;

  switch (action.type) {
    case 'SET_LAYOUT':
      newState = {
        ...oldState,
        layout: action.layout
      };
      break;

    default:
      newState = {
        ...oldState
      };
      break;
  }

  return newState;
}
