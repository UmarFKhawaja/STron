import { type TorrentsAction, type TorrentsState } from './types';

export function reduce(oldState: TorrentsState, action: TorrentsAction): TorrentsState {
  let newState: TorrentsState;

  switch (action.type) {
    case 'UPDATE_TORRENTS':
      newState = {
        ...oldState,
        torrents: action.torrents
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
