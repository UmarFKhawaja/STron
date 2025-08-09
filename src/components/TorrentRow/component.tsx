import { Anchor, Table } from '@mantine/core';
import { ReceptionDisplay } from '../ReceptionDisplay';
import { ReviewCount } from '../ReviewCount';
import { type TorrentRowProps } from './props';

export function TorrentRow({ torrent }: TorrentRowProps) {
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
}
