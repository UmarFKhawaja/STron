import { Table } from '@mantine/core';
import { useTorrents } from '../../providers';
import { TorrentRows } from './components';

export function TorrentsTable() {
  const { torrents } = useTorrents();

  return (
    <Table.ScrollContainer minWidth={1000}>
      <Table verticalSpacing="lg" striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            {
              [
                'Name',
                'ETA',
                'Status',
                'Progress',
                ''
              ]
                .map((heading: string, index: number) => (
                  <Table.Th key={`heading-${index}`}>{heading}</Table.Th>
                ))
            }
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <TorrentRows torrents={torrents}/>
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
