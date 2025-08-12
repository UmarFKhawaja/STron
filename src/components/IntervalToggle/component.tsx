import { ActionIcon } from '@mantine/core';
import {
  IconTimeDuration0,
  IconTimeDuration10,
  IconTimeDuration15,
  IconTimeDuration30,
  IconTimeDuration5,
  IconTimeDuration60
} from '@tabler/icons-react';
import { useSettings } from '../../providers';

export function IntervalToggle() {
  const {
    interval,
    scrollInterval
  } = useSettings();

  return (
    <ActionIcon variant="transparent" c="gray" onClick={scrollInterval}>
      {
        interval === 1000 && <IconTimeDuration0/>
      }
      {
        interval === 5000 && <IconTimeDuration5/>
      }
      {
        interval === 10000 && <IconTimeDuration10/>
      }
      {
        interval === 15000 && <IconTimeDuration15/>
      }
      {
        interval === 30000 && <IconTimeDuration30/>
      }
      {
        interval === 60000 && <IconTimeDuration60/>
      }
    </ActionIcon>
  );
}
