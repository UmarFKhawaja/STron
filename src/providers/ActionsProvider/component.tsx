import { useCallback, useMemo } from 'react';
import { type GetTorrentResponse, TransmissionClient } from '@brielov/transmission-rpc';
import { Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { type Torrent, type TorrentKeys } from '../../types';
import { useCredentials } from '../CredentialsProvider';
import { ActionsContext } from './context';
import { create } from './methods';
import { type ActionsProviderProps } from './props';
import { type ActionsValue } from './types';

export function ActionsProvider({ children }: ActionsProviderProps) {
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
          'percentComplete',
          'uploadRatio',
          'rateUpload',
          'rateDownload',
          'uploadedEver',
          'downloadedEver'
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

  const startAllTorrents = useCallback(async (): Promise<void> => {}, []);

  const stopAllTorrents = useCallback(async (): Promise<void> => {}, []);

  const value: ActionsValue = {
    fetchTorrents,
    startAllTorrents,
    stopAllTorrents
  };

  return (
    <ActionsContext.Provider value={value}>
      {children}
    </ActionsContext.Provider>
  );
}
