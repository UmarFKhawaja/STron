import { Container, Stack } from '@mantine/core';
import { useTorrents } from '../../providers';
import { TorrentTiles } from './components';

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
