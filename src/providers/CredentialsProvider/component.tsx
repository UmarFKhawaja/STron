import { useCallback, useReducer } from 'react';
import { CredentialsContext } from './context';
import { reduce } from './methods';
import { type CredentialsProviderProps } from './props';
import { type CredentialsValue } from './types';

export function CredentialsProvider({ children }: CredentialsProviderProps) {
  const [state, dispatch] = useReducer(reduce, {
    username: '',
    password: ''
  });

  const hasCredentials: boolean = !!state.username && !!state.password;

  const setCredentials = useCallback(async (username: string, password: string): Promise<void> => {
    dispatch({
      type: 'SET_CREDENTIALS',
      username,
      password
    });
  }, [dispatch]);

  const unsetCredentials = useCallback(async (): Promise<void> => {
    dispatch({
      type: 'UNSET_CREDENTIALS'
    });
  }, [dispatch]);

  const value: CredentialsValue = {
    ...state,
    hasCredentials,
    setCredentials,
    unsetCredentials
  };

  return (
    <CredentialsContext.Provider value={value}>
      {children}
    </CredentialsContext.Provider>
  );
}
