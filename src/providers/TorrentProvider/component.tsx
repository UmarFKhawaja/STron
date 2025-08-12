import { EditTorrentLabelsModal, RenameTorrentModal, SetTorrentLocationModal } from '../../components';
import { TorrentContext } from './context';
import { type TorrentProviderProps } from './props';
import { type TorrentValue } from './types';

export function TorrentProvider({ torrent, children }: TorrentProviderProps) {
  const value: TorrentValue = {
    torrent
  };

  return (
    <TorrentContext.Provider value={value}>
      {children}
      <SetTorrentLocationModal/>
      <RenameTorrentModal/>
      <EditTorrentLabelsModal/>
    </TorrentContext.Provider>
  );
}
