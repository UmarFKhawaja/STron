import { DEFINED_INTERVALS } from './constants';
import { type SettingsAction, type SettingsState } from './types';

export function reduce(oldState: SettingsState, action: SettingsAction): SettingsState {
  let newState: SettingsState;

  switch (action.type) {
    case 'SET_INTERVAL':
      newState = {
        ...oldState,
        interval: action.interval
      };
      break;

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

export function getPreviousInterval(interval: number): number {
  const index: number = DEFINED_INTERVALS.findIndex((i: number): boolean => i === interval);

  if (index === -1) {
    return interval;
  }

  if (index > 1) {
    return DEFINED_INTERVALS[index - 1];
  }

  return interval;
}

export function getNextInterval(interval: number): number {
  const index: number = DEFINED_INTERVALS.findIndex((i: number): boolean => i === interval);

  if (index === -1) {
    return interval;
  }

  if (index < DEFINED_INTERVALS.length - 2) {
    return DEFINED_INTERVALS[index + 1];
  }

  return interval;
}
