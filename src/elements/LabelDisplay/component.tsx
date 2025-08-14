import { Anchor, Group, Text } from '@mantine/core';
import { useTorrent } from '../../providers';

export function LabelDisplay() {
  const { torrent } = useTorrent();

  const labels: string[] = torrent.labels ? [
    ...torrent.labels
  ] : [];

  if (labels.length === 0) {
    return <></>;
  }

  return (
    <Group>
      {
        labels.map((label: string) => (
          <Anchor key={label}>
            <Text c="blue">#{label}</Text>
          </Anchor>
        ))
      }
    </Group>
  );
}
