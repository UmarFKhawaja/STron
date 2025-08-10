import { useCallback, useEffect, useReducer } from 'react';
import { useSessionStorage } from '@mantine/hooks';
import { DEFAULT_PASSWORD, DEFAULT_USERNAME, INITIAL_STATE } from './constants';
import { CredentialsContext } from './context';
import { reduce } from './methods';
import { type CredentialsProviderProps } from './props';
import { type CredentialsValue } from './types';

export function CredentialsProvider({ children }: CredentialsProviderProps) {
  const [username, setUsername] = useSessionStorage<string>({
    key: 'providers:CredentialsProvider:username',
    defaultValue: DEFAULT_USERNAME,
  });

  const [password, setPassword] = useSessionStorage<string>({
    key: 'providers:CredentialsProvider:password',
    defaultValue: DEFAULT_PASSWORD,
  });

  const [state, dispatch] = useReducer(reduce, INITIAL_STATE);

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

    setUsername(DEFAULT_USERNAME);
    setPassword(DEFAULT_PASSWORD);
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
