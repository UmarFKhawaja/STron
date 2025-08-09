import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { AppPresenter } from './core';
import { CredentialsProvider, TorrentsProvider } from './providers';
import { theme } from './theme';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <CredentialsProvider>
        <TorrentsProvider>
          <AppPresenter/>
        </TorrentsProvider>
      </CredentialsProvider>
    </MantineProvider>
  </StrictMode>
);
