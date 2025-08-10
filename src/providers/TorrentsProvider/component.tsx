import { useCallback, useEffect, useReducer } from 'react';
import { useInterval } from '@mantine/hooks';
import { type Torrent } from '../../types';
import { useActions } from '../ActionsProvider';
import { useSettings } from '../SettingsProvider';
import { INITIAL_STATE } from './constants';
import { TorrentsContext } from './context';
import { reduce } from './methods';
import { type TorrentsProviderProps } from './props';
import { type TorrentsValue } from './types';

export function TorrentsProvider({ children }: TorrentsProviderProps) {
  const { interval } = useSettings();

  const { fetchTorrents } = useActions();

  const [state, dispatch] = useReducer(reduce, INITIAL_STATE);

  const refreshTorrents = useCallback(async (): Promise<void> => {
    const torrents: Torrent[] = [
      ...await fetchTorrents()
    ];

    dispatch({
      type: 'UPDATE_TORRENTS',
      torrents
    });
  }, [fetchTorrents]);

  const value: TorrentsValue = {
    ...state,
    refreshTorrents
  };

  useEffect(() => {
    refreshTorrents()
      .then()
      .catch();
  }, [refreshTorrents]);

  const handle = useInterval((): Promise<void> => refreshTorrents(), interval);

  useEffect(() => {
    handle.start();

    return handle.stop;
  }, [handle, handle.start, handle.stop]);

  return (
    <TorrentsContext.Provider value={value}>
      {children}
    </TorrentsContext.Provider>
  );
}
