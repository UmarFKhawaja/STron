import { localStorageColorSchemeManager, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { AddTorrentModal, LogoutModal } from '../../components';
import { PrivateLayout, PublicLayout } from '../../layouts';
import { LoginForm, TorrentsView } from '../../outlets';
import { ModalProvider, useCredentials } from '../../providers';
import { theme } from '../../theme';

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'color-scheme',
});

export function AppPresenter() {
  const { hasCredentials } = useCredentials();

  return (
    <MantineProvider theme={theme} colorSchemeManager={colorSchemeManager} defaultColorScheme="auto">
      <ModalProvider>
        {
          hasCredentials
            ? (
              <PrivateLayout>
                <TorrentsView/>
              </PrivateLayout>
            )
            : (
              <PublicLayout>
                <LoginForm/>
              </PublicLayout>
            )
        }
        <LogoutModal/>
        <AddTorrentModal/>
        <Notifications/>
      </ModalProvider>
    </MantineProvider>
  );
}
