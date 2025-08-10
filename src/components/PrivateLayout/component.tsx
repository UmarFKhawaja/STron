import { AppShell, Burger, Divider, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconPlayerPlay, IconPlayerStop } from '@tabler/icons-react';
import { useCredentials } from '../../providers';
import { ActionButton } from '../ActionButton';
import { LayoutSwitch } from '../LayoutSwitch';
import { type PrivateLayoutProps } from './props';

export function PrivateLayout({ children }: PrivateLayoutProps) {
  const { unsetCredentials } = useCredentials();

  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
    >
      <AppShell.Header>
        <Group w="100%" h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group w="100%" justify="space-between">
            <Text variant="gradient" ff="heading" fz="h3">S-Tronic</Text>
            <Group>
              <LayoutSwitch/>
              <Divider/>
              <ActionButton c="green">
                <IconPlayerPlay/>
              </ActionButton>
              <ActionButton c="red">
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
