import { Fragment } from 'react';
import { type Torrent } from '../../types';
import { type TorrentCardsProps } from './props';

export function TorrentCards({ torrents, children }: TorrentCardsProps) {
  return torrents.map((torrent: Torrent, index: number) => (
    <Fragment key={`torrent-${index}`}>
      {
        children(torrent)
      }
    </Fragment>
  ));
}
