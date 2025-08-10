import { AppShell, Burger, Divider, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconClockBolt, IconLogout, IconPlayerPlay, IconPlayerStop, IconSparkles } from '@tabler/icons-react';
import { useActions, useCredentials } from '../../providers';
import { ActionButton } from '../ActionButton';
import { LayoutSwitch } from '../LayoutSwitch';
import { type PrivateLayoutProps } from './props';

export function PrivateLayout({ children }: PrivateLayoutProps) {
  const { unsetCredentials } = useCredentials();

  const { startAllTorrents, stopAllTorrents } = useActions();

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
              <ActionButton>
                <IconClockBolt/>
              </ActionButton>
              <Divider/>
              <LayoutSwitch/>
              <Divider/>
              <ActionButton c="yellow">
                <IconSparkles/>
              </ActionButton>
              <Divider/>
              <ActionButton c="green" onClick={startAllTorrents}>
                <IconPlayerPlay/>
              </ActionButton>
              <ActionButton c="red" onClick={stopAllTorrents}>
                <IconPlayerStop/>
              </ActionButton>
              <Divider/>
              <ActionButton onClick={unsetCredentials}>
                <IconLogout/>
              </ActionButton>
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
