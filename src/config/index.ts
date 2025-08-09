import { type Config, CONFIG_SCHEMA } from '../types';

export const config: Config = CONFIG_SCHEMA.parse({
  host: import.meta.env.VITE_HOST || 'localhost',
  port: parseInt(import.meta.env.VITE_PORT || '9090'),
  transmission: {
    host: import.meta.env.VITE_TRANSMISSION_HOST || 'localhost',
    port: parseInt(import.meta.env.VITE_TRANSMISSION_PORT || '9091'),
    mode: import.meta.env.VITE_TRANSMISSION_MODE || '',
    url: import.meta.env.VITE_TRANSMISSION_URL || '/transmission/'
  }
});
