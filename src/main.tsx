import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppPresenter } from './core';
import { ActionsProvider, CredentialsProvider, SettingsProvider, TorrentsProvider } from './providers';
import '@mantine/core/styles.layer.css';
import '@mantine/dropzone/styles.layer.css';
import '@mantine/notifications/styles.layer.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CredentialsProvider>
      <SettingsProvider>
        <ActionsProvider>
          <TorrentsProvider>
            <AppPresenter/>
          </TorrentsProvider>
        </ActionsProvider>
      </SettingsProvider>
    </CredentialsProvider>
  </StrictMode>
);
