import { useCallback, useEffect, useReducer } from 'react';
import { useSessionStorage } from '@mantine/hooks';
import { CredentialsContext } from './context';
import { reduce } from './methods';
import { type CredentialsProviderProps } from './props';
import { type CredentialsValue } from './types';

export function CredentialsProvider({ children }: CredentialsProviderProps) {
  const [username, setUsername] = useSessionStorage({
    key: 'providers:CredentialsProvider:username',
    defaultValue: '',
  });

  const [password, setPassword] = useSessionStorage({
    key: 'providers:CredentialsProvider:password',
    defaultValue: '',
  });

  const [state, dispatch] = useReducer(reduce, {
    username,
    password
  });

  const hasCredentials: boolean = !!state.username && !!state.password;

  const setCredentials = useCallback(async (username: string, password: string): Promise<void> => {
    dispatch({
      type: 'SET_CREDENTIALS',
      username,
      password
    });

    setUsername(username);
    setPassword(password);
  }, [setUsername, setPassword]);

  const unsetCredentials = useCallback(async (): Promise<void> => {
    dispatch({
      type: 'UNSET_CREDENTIALS'
    });

    setUsername('');
    setPassword('');
  }, [setUsername, setPassword]);

  const value: CredentialsValue = {
    ...state,
    hasCredentials,
    setCredentials,
    unsetCredentials
  };

  useEffect(() => {
    if (!!username && !!password) {
      dispatch({
        type: 'SET_CREDENTIALS',
        username,
        password
      });
    }
  }, [username, password]);

  return (
    <CredentialsContext.Provider value={value}>
      {children}
    </CredentialsContext.Provider>
  );
}
