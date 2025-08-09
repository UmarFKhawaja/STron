import { Table } from '@mantine/core';
import { useTorrents } from '../../providers';
import { type TorrentsTableProps } from './props';

export function TorrentsTable({ headings, children }: TorrentsTableProps) {
  const { torrents } = useTorrents();

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
