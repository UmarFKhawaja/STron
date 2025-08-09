import { useContext } from 'react';
import { CredentialsContext } from './context';
import { type CredentialsValue } from './types';

export function useCredentials(): CredentialsValue {
  return useContext(CredentialsContext);
}
