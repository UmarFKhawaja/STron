import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { AppPresenter } from './core';
import { ActionProvider, CredentialsProvider, SettingsProvider, TorrentsProvider } from './providers';
import { theme } from './theme';
import '@mantine/core/styles.layer.css';
import '@mantine/dropzone/styles.layer.css';
import '@mantine/notifications/styles.layer.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <CredentialsProvider>
        <SettingsProvider>
          <ActionProvider>
            <TorrentsProvider>
              <AppPresenter/>
            </TorrentsProvider>
          </ActionProvider>
        </SettingsProvider>
      </CredentialsProvider>
    </MantineProvider>
  </StrictMode>
);
