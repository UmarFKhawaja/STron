import { AppShell, Burger, Divider, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle, IntervalToggle, LayoutSwitch, SessionControls, TorrentControls } from '../../components';
import { type PrivateLayoutProps } from './props';

export function PrivateLayout({ children }: PrivateLayoutProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
    >
      <AppShell.Header>
        <Group w="100%" h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group w="100%" justify="space-between">
            <Text variant="gradient" ff="heading" fz="h3">S-Tron</Text>
            <Group gap="xs">
              <ColorSchemeToggle/>
              <IntervalToggle/>
              <Divider size="xs"/>
              <LayoutSwitch/>
              <Divider size="xs"/>
              <TorrentControls/>
              <Divider size="xs"/>
              <SessionControls/>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
