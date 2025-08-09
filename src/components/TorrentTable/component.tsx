import { Table } from '@mantine/core';
import { type Torrent } from '../../types';
import { TORRENTS } from './data';
import { type TorrentTableProps } from './props';

export function TorrentTable({ headings, children }: TorrentTableProps) {
  const torrents: Torrent[] = TORRENTS;

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="lg">
        <Table.Thead>
          <Table.Tr>
            {
              headings.map((heading: string, index: number) => (
                <Table.Th key={`heading-${index}`}>{heading}</Table.Th>
              ))
            }
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {
            children(torrents)
          }
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
