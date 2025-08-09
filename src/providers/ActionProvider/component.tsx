import { useCallback, useMemo } from 'react';
import { type GetTorrentResponse, TransmissionClient } from '@brielov/transmission-rpc';
import { Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { type Torrent, type TorrentKeys } from '../../types';
import { useCredentials } from '../CredentialsProvider';
import { ActionContext } from './context';
import { create } from './methods';
import { type ActionProviderProps } from './props';
import { type ActionValue } from './types';

export function ActionProvider({ children }: ActionProviderProps) {
  const { username, password, hasCredentials } = useCredentials();

  const transmissionClient: TransmissionClient | null = useMemo(
    () => hasCredentials ? create(username, password) : null, [username, password, hasCredentials]
  );

  const fetchTorrents = useCallback(async (): Promise<Torrent[]> => {
    try {
      if (!transmissionClient) {
        return [];
      }

      const response: GetTorrentResponse<TorrentKeys> = await transmissionClient.get({
        fields: [
          'id',
          'name',
          'eta',
          'status',
          'percentComplete'
        ]
      });

      return [
        ...response.torrents
      ];
    } catch (error: unknown) {
      const { message } = error as Error;

      showNotification({
        message: (
          <>
            <Text ff="heading">There was a problem fetching torrents.</Text>
            <Text ff="text">{message}</Text>
          </>
        ),
        color: 'red',
        title: 'Credentials'
      });

      return [];
    }
  }, [transmissionClient]);

  const value: ActionValue = {
    fetchTorrents
  };

  return (
    <ActionContext.Provider value={value}>
      {children}
    </ActionContext.Provider>
  );
}
