import { Center, Text } from '@mantine/core';
import { useTorrent } from '../../../../../../../../providers';
import { formatStatus } from './methods';

export function StatusLabel() {
  const { torrent } = useTorrent();

  return (
    <Center>
      <Text size="sm">
        {
          formatStatus(torrent.status)
        }
      </Text>
    </Center>
  );
}
