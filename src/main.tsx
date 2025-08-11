import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { localStorageColorSchemeManager, MantineProvider } from '@mantine/core';
import { AppPresenter } from './core';
import { ActionsProvider, CredentialsProvider, SettingsProvider, TorrentsProvider } from './providers';
import { theme } from './theme';
import '@mantine/core/styles.layer.css';
import '@mantine/dropzone/styles.layer.css';
import '@mantine/notifications/styles.layer.css';

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'color-scheme',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} colorSchemeManager={colorSchemeManager} defaultColorScheme="auto">
      <CredentialsProvider>
        <SettingsProvider>
          <ActionsProvider>
            <TorrentsProvider>
              <AppPresenter/>
            </TorrentsProvider>
          </ActionsProvider>
        </SettingsProvider>
      </CredentialsProvider>
    </MantineProvider>
  </StrictMode>
);
