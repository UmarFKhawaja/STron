import { type CredentialsAction, type CredentialsState } from './types';

export function reduce(oldState: CredentialsState, action: CredentialsAction): CredentialsState {
  let newState: CredentialsState;

  switch (action.type) {
    case 'SET_CREDENTIALS':
      newState = {
        ...oldState,
        username: action.username,
        password: action.password
      };
      break;

    case 'UNSET_CREDENTIALS':
      newState = {
        ...oldState,
        username: '',
        password: ''
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
