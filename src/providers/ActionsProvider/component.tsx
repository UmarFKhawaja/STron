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

  const startAllTorrents = useCallback(async (): Promise<void> => {
    console.log('startAllTorrents');
  }, []);

  const stopAllTorrents = useCallback(async (): Promise<void> => {
    console.log('stopAllTorrents');
  }, []);

  const startTorrent = useCallback(async (id: number): Promise<void> => {
    console.log('startTorrent', id);
  }, []);

  const stopTorrent = useCallback(async (id: number): Promise<void> => {
    console.log('stopTorrent', id);
  }, []);

  const moveTorrentUp = useCallback(async (id: number): Promise<void> => {
    console.log('moveTorrentUp', id);
  }, []);

  const moveTorrentDown = useCallback(async (id: number): Promise<void> => {
    console.log('moveTorrentDown', id);
  }, []);

  const moveTorrentToTop = useCallback(async (id: number): Promise<void> => {
    console.log('moveTorrentToTop', id);
  }, []);

  const moveTorrentToBottom = useCallback(async (id: number): Promise<void> => {
    console.log('moveTorrentToBottom', id);
  }, []);

  const copyTorrentLink = useCallback(async (id: number): Promise<void> => {
    console.log('copyTorrentLink', id);
  }, []);

  const verifyTorrentLocalData = useCallback(async (id: number): Promise<void> => {
    console.log('verifyTorrentLocalData', id);
  }, []);

  const setTorrentLocation = useCallback(async (id: number): Promise<void> => {
    console.log('setTorrentLocation', id);
  }, []);

  const renameTorrent = useCallback(async (id: number): Promise<void> => {
    console.log('renameTorrent', id);
  }, []);

  const editTorrentLabels = useCallback(async (id: number): Promise<void> => {
    console.log('editTorrentLabels', id);
  }, []);

  const removeTorrent = useCallback(async (id: number): Promise<void> => {
    console.log('removeTorrent', id);
  }, []);

  const removeTorrentAndDeleteFiles = useCallback(async (id: number): Promise<void> => {
    console.log('removeTorrentAndDeleteFiles', id);
  }, []);

  const askTorrentTrackerForMorePeers = useCallback(async (id: number): Promise<void> => {
    console.log('askTorrentTrackerForMorePeers', id);
  }, []);

  const value: ActionsValue = {
    fetchTorrents,
    startAllTorrents,
    stopAllTorrents,
    startTorrent,
    stopTorrent,
    moveTorrentUp,
    moveTorrentDown,
    moveTorrentToTop,
    moveTorrentToBottom,
    copyTorrentLink,
    verifyTorrentLocalData,
    setTorrentLocation,
    renameTorrent,
    editTorrentLabels,
    removeTorrent,
    removeTorrentAndDeleteFiles,
    askTorrentTrackerForMorePeers
  };

  return (
    <ActionsContext.Provider value={value}>
      {children}
    </ActionsContext.Provider>
  );
}
