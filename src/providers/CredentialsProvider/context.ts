import { type Context, createContext } from 'react';
import { type CredentialsValue } from './types';

export const CredentialsContext: Context<CredentialsValue> = createContext<CredentialsValue>({
  username: '',
  password: '',
  hasCredentials: false,
  setCredentials: async (): Promise<void> => {
  },
  unsetCredentials: async (): Promise<void> => {
  }
});
