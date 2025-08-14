import { Text } from '@mantine/core';
import { useTorrent } from '../../providers';
import { formatStatus } from './methods';
import type { StatusLabelProps } from './props';

export function StatusLabel({ space = false }: StatusLabelProps) {
  const { torrent } = useTorrent();

  return (
    <Text size="sm" my={space ? 'lg' : undefined}>
      {
        formatStatus(torrent.status)
      }
    </Text>
  );
}
