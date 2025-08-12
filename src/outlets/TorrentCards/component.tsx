import { Grid } from '@mantine/core';
import { TorrentProvider } from '../../providers';
import { type Torrent } from '../../types';
import { TorrentCard } from '../TorrentCard';
import { type TorrentCardsProps } from './props';

export function TorrentCards({ torrents }: TorrentCardsProps) {
  return torrents.map((torrent: Torrent) => (
    <TorrentProvider key={`torrent-${torrent.id}`} torrent={torrent}>
      <Grid.Col span={6}>
        <TorrentCard/>
      </Grid.Col>
    </TorrentProvider>
  ));
}
