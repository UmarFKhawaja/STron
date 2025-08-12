import { ActionIcon, AppShell, Burger, Divider, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconPlayerPlay, IconPlayerStop, IconSparkles } from '@tabler/icons-react';
import { useActions, useModal, useTorrents } from '../../providers';
import { ColorSchemeToggle } from '../ColorSchemeToggle';
import { IntervalToggle } from '../IntervalToggle';
import { LayoutSwitch } from '../LayoutSwitch';
import { type PrivateLayoutProps } from './props';

export function PrivateLayout({ children }: PrivateLayoutProps) {
  const { showModal } = useModal();

  const {
    startAllTorrents,
    stopAllTorrents
  } = useActions();

  const { torrents } = useTorrents();

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
              <ActionIcon variant="transparent" c="yellow" onClick={(): void => {
                showModal('add-torrent');
              }}>
                <IconSparkles/>
              </ActionIcon>
              <Divider size="xs"/>
              <ActionIcon variant="transparent" c="green" onClick={() => startAllTorrents(torrents)}>
                <IconPlayerPlay/>
              </ActionIcon>
              <ActionIcon variant="transparent" c="red" onClick={() => stopAllTorrents(torrents)}>
                <IconPlayerStop/>
              </ActionIcon>
              <Divider size="xs"/>
              <ActionIcon variant="transparent" c="gray" onClick={() => {
                showModal('logout');
              }}>
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
