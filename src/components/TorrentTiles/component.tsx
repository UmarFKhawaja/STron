import { Fragment } from 'react';
import { type Torrent } from '../../types';
import { type TorrentTilesProps } from './props';

export function TorrentTiles({ torrents, children }: TorrentTilesProps) {
  return torrents.map((torrent: Torrent, index: number) => (
    <Fragment key={`torrent-${index}`}>
      {
        children(torrent)
      }
    </Fragment>
  ));
}
