import { Group, Text, ThemeIcon } from '@mantine/core';
import { IconArrowDown, IconArrowUp, IconCloudDownload, IconCloudUpload, IconPercentage } from '@tabler/icons-react';
import { useTorrent } from '../../../../../../../../providers';
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
                      formatQuantity(DEFINED_BYTES, torrent.downloadedEver)
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
                      formatQuantity(DEFINED_BYTES, torrent.uploadedEver)
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
                    formatQuantity(DEFINED_RATES, torrent.rateDownload)
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
                    formatQuantity(DEFINED_RATES, torrent.rateUpload)
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

    default:
      return <></>;
  }
}
