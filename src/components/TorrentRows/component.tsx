import { Fragment } from 'react';
import { type Torrent } from '../../types';
import { type TorrentRowsProps } from './props';

export function TorrentRows({ torrents, children }: TorrentRowsProps) {
  return torrents.map((torrent: Torrent, index: number) => (
    <Fragment key={`torrent-${index}`}>
      {
        children(torrent)
      }
    </Fragment>
  ));
}
