import { useCallback, useEffect, useReducer } from 'react';
import { type Torrent } from '../../types';
import { useAction } from '../ActionProvider';
import { INITIAL_STATE } from './constants';
import { TorrentsContext } from './context';
import { reduce } from './methods';
import { type TorrentsProviderProps } from './props';
import { type TorrentsValue } from './types';

export function TorrentsProvider({ children }: TorrentsProviderProps) {
  const { fetchTorrents } = useAction();

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

  return (
    <TorrentsContext.Provider value={value}>
      {children}
    </TorrentsContext.Provider>
  );
}
