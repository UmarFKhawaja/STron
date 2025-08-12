import { Container, Stack } from '@mantine/core';
import { useTorrents } from '../../providers';
import { TorrentTiles } from '../TorrentTiles';

export function TorrentsList() {
  const { torrents } = useTorrents();

  return (
    <Container pt="md">
      <Stack>
        <TorrentTiles torrents={torrents}/>
      </Stack>
    </Container>
  );
}
