import { Center, Text } from '@mantine/core';
import { useTorrent } from '../../../../../../../../providers';
import { formatFraction } from './methods';

export function RatioLabel() {
  const { torrent } = useTorrent();

  return (
    <Center>
      <Text size="sm">
        {
          formatFraction(torrent.uploadRatio)
        }
      </Text>
    </Center>
  );
}
