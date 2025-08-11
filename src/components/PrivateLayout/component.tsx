import { ActionIcon, AppShell, Burger, Divider, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconPlayerPlay, IconPlayerStop, IconSparkles } from '@tabler/icons-react';
import { useActions, useCredentials } from '../../providers';
import { ColorSchemeToggle } from '../ColorSchemeToggle';
import { IntervalToggle } from '../IntervalToggle';
import { LayoutSwitch } from '../LayoutSwitch';
import { type PrivateLayoutProps } from './props';

export function PrivateLayout({ children }: PrivateLayoutProps) {
  const { unsetCredentials } = useCredentials();

  const {
    startAllTorrents,
    stopAllTorrents
  } = useActions();

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
              <ActionIcon variant="transparent" c="yellow">
                <IconSparkles/>
              </ActionIcon>
              <Divider size="xs"/>
              <ActionIcon variant="transparent" c="green" onClick={startAllTorrents}>
                <IconPlayerPlay/>
              </ActionIcon>
              <ActionIcon variant="transparent" c="red" onClick={stopAllTorrents}>
                <IconPlayerStop/>
              </ActionIcon>
              <Divider size="xs"/>
              <ActionIcon variant="transparent" c="gray" onClick={unsetCredentials}>
                <IconLogout/>
              </ActionIcon>
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
