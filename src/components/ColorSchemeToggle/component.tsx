import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun, IconSunMoon } from '@tabler/icons-react';
import { useCallback } from 'react';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleColorScheme = useCallback(() => {
    switch (colorScheme) {
      case 'light':
        setColorScheme('dark');
        break;

      case 'dark':
        setColorScheme('auto');
        break;

      case 'auto':
        setColorScheme('light');
        break;
    }
  }, [colorScheme, setColorScheme]);

  return (
    <ActionIcon variant="transparent" c="gray" onClick={toggleColorScheme}>
      {
        colorScheme === 'light' && <IconSun/>
      }
      {
        colorScheme === 'dark' && <IconMoon/>
      }
      {
        colorScheme === 'auto' && <IconSunMoon/>
      }
    </ActionIcon>
  );
}
