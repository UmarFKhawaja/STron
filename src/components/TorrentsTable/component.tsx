import { Center, Table } from '@mantine/core';
import { useTorrents } from '../../providers';
import { TorrentRows } from './components';
import { DEFINED_COLUMNS } from './constants';

export function TorrentsTable() {
  const { torrents } = useTorrents();

  return (
    <Table.ScrollContainer minWidth={1000}>
      <Table verticalSpacing="lg" highlightOnHover withColumnBorders withRowBorders striped>
        <Table.Thead>
          <Table.Tr>
            {
              DEFINED_COLUMNS
                .map(([heading, isCentered]: [string, boolean], index: number) => (
                  <Table.Th key={`heading-${index}`}>
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
