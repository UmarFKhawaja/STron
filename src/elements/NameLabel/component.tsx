import { Text } from '@mantine/core';
import { useTorrent } from '../../providers';

export function NameLabel() {
  const { torrent } = useTorrent();

  return (
    <Text size="lg" fw={600}>
      {torrent.name}
    </Text>
  );
}
