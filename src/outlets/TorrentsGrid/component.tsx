import { Container, Grid } from '@mantine/core';
import { useTorrents } from '../../providers';
import { TorrentCards } from '../TorrentCards';

export function TorrentsGrid() {
  const { torrents } = useTorrents();

  return (
    <Container my="md" fluid>
      <Grid columns={12}>
        <TorrentCards torrents={torrents}/>
      </Grid>
    </Container>
  );
}
