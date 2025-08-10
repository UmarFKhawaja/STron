import { type CredentialsState, type CredentialsValue } from './types';

export const DEFAULT_USERNAME: string = '';

export const DEFAULT_PASSWORD: string = '';

export const INITIAL_STATE: CredentialsState = {
  username: DEFAULT_USERNAME,
  password: DEFAULT_PASSWORD
};

export const INITIAL_VALUE: CredentialsValue = {
  ...INITIAL_STATE,
  hasCredentials: !!DEFAULT_USERNAME && !!DEFAULT_PASSWORD,
  setCredentials: async (): Promise<void> => {
  },
  unsetCredentials: async (): Promise<void> => {
  }
};
