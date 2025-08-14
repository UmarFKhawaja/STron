import { Center, Table } from '@mantine/core';
import { useTorrents } from '../../providers';
import { TorrentRows } from '../TorrentRows';
import { DEFINED_COLUMNS } from './constants';

export function TorrentsTable() {
  const { torrents } = useTorrents();

  return (
    <Table.ScrollContainer minWidth={100}>
      <Table verticalSpacing="lg" highlightOnHover withColumnBorders withRowBorders striped>
        <Table.Thead>
          <Table.Tr>
            {
              DEFINED_COLUMNS
                .map(([heading, width, isCentered]: [string, string | number, boolean], index: number) => (
                  <Table.Th key={`heading-${index}`} w={width}>
                    {
                      isCentered
                        ? <Center>{heading}</Center>
                        : <>{heading}</>
                    }
                  </Table.Th>
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
