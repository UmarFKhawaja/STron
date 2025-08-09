import { Anchor, Table } from '@mantine/core';
import { type Torrent } from '../../types';
import { ReceptionDisplay } from '../ReceptionDisplay';
import { ReviewCount } from '../ReviewCount';
import { TORRENTS } from './data';

export function TorrentTable() {
  const torrents: Torrent[] = TORRENTS;

  const rows = torrents.map((torrent) => {
    return (
      <Table.Tr key={torrent.title}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {torrent.title}
          </Anchor>
        </Table.Td>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {torrent.author}
          </Anchor>
        </Table.Td>
        <Table.Td>{torrent.year}</Table.Td>
        <Table.Td>
          <ReviewCount torrent={torrent}/>
        </Table.Td>
        <Table.Td>
          <ReceptionDisplay torrent={torrent}/>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="lg">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Title</Table.Th>
            <Table.Th>Author</Table.Th>
            <Table.Th>Year</Table.Th>
            <Table.Th>Reviews</Table.Th>
            <Table.Th>Reception</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
