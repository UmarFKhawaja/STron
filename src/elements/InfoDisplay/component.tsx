import { Group, Text, ThemeIcon } from '@mantine/core';
import {
  IconArrowDown,
  IconArrowUp,
  IconCloudDownload,
  IconCloudUpload,
  IconDatabase,
  IconPercentage
} from '@tabler/icons-react';
import { useTorrent } from '../../providers';
import { DEFINED_BYTES, DEFINED_RATES } from './constants';
import { formatPercentage, formatQuantity } from './methods';
import { type InfoDisplayProps } from './props';

export function InfoDisplay({ mode }: InfoDisplayProps) {
  const { torrent } = useTorrent();

  switch (mode) {
    case 'downloadedBytes':
      return (
        <>
          {
            torrent.downloadedEver > 0
              && (
                <Group gap="xs">
                  <ThemeIcon variant="transparent" c="gray" size="sm">
                    <IconCloudDownload/>
                  </ThemeIcon>
                  <Text size="sm">
                    {
                      formatQuantity(torrent.downloadedEver, DEFINED_BYTES)
                    }
                  </Text>
                </Group>
              )
          }
        </>
      );

    case 'uploadedBytes':
      return (
        <>
          {
            torrent.uploadedEver > 0
              && (
                <Group gap="xs">
                  <ThemeIcon variant="transparent" c="gray" size="sm">
                    <IconCloudUpload/>
                  </ThemeIcon>
                  <Text size="sm">
                    {
                      formatQuantity(torrent.uploadedEver, DEFINED_BYTES)
                    }
                  </Text>
                </Group>
              )
          }
        </>
      );

    case 'downloadRate':
      return (
        <>
          {
            torrent.rateDownload > 0
            && (
              <Group gap="xs">
                <ThemeIcon variant="transparent" c="gray" size="sm">
                  <IconArrowDown/>
                </ThemeIcon>
                <Text size="sm">
                  {
                    formatQuantity(torrent.rateDownload, DEFINED_RATES)
                  }
                </Text>
              </Group>
            )
          }
        </>
      );

    case 'uploadRate':
      return (
        <>
          {
            torrent.rateUpload > 0
            && (
              <Group gap="xs">
                <ThemeIcon variant="transparent" c="gray" size="sm">
                  <IconArrowUp/>
                </ThemeIcon>
                <Text size="sm">
                  {
                    formatQuantity(torrent.rateUpload, DEFINED_RATES)
                  }
                </Text>
              </Group>
            )
          }
        </>
      );

    case 'percentageDone':
      return (
        <Group gap="xs">
          <ThemeIcon variant="transparent" c="gray" size="sm">
            <IconPercentage/>
          </ThemeIcon>
          <Text size="xs">
            {
              formatPercentage(torrent.percentComplete, true)
            }
          </Text>
        </Group>
      );

    case 'totalSize':
      return (
        <Group gap="xs">
          <ThemeIcon variant="transparent" c="gray" size="sm">
            <IconDatabase/>
          </ThemeIcon>
          <Text size="xs">
            {
              formatQuantity(torrent.totalSize, DEFINED_BYTES)
            }
          </Text>
        </Group>
      );

    default:
      return <></>;
  }
}
