import { useCallback, useEffect, useReducer } from 'react';
import { fetchTorrents, getTorrents } from '../../methods';
import { type Torrent } from '../../types';
import { useCredentials } from '../CredentialsProvider';
import { TorrentsContext } from './context';
import { reduce } from './methods';
import { type TorrentsProviderProps } from './props';
import { type TorrentsValue } from './types';

export function TorrentsProvider({ children }: TorrentsProviderProps) {
  const { username, password, hasCredentials } = useCredentials();

  const [state, dispatch] = useReducer(reduce, {
    torrents: []
  });

  const refreshTorrents = useCallback(async (): Promise<void> => {
    if (hasCredentials) {
      await fetchTorrents(username, password);

      const torrents: Torrent[] = await getTorrents();

      dispatch({
        type: 'UPDATE_TORRENTS',
        torrents
      });
    } else {
      dispatch({
        type: 'UPDATE_TORRENTS',
        torrents: []
      });
    }

  }, [password, username, hasCredentials]);

  const value: TorrentsValue = {
    ...state,
    refreshTorrents
  };

  useEffect(() => {
    refreshTorrents()
      .then()
      .catch();
  }, [refreshTorrents]);

  return (
    <TorrentsContext.Provider value={value}>
      {children}
    </TorrentsContext.Provider>
  );
}
