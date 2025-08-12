import { type Config, CONFIG_SCHEMA } from '../types';

export const config: Config = CONFIG_SCHEMA.parse({
  host: import.meta.env.VITE_HOST ?? 'localhost',
  port: Number(import.meta.env.VITE_PORT) || 9090,
  transmission: {
    host: import.meta.env.VITE_TRANSMISSION_HOST ?? 'localhost',
    port: Number(import.meta.env.VITE_TRANSMISSION_PORT) || 9091,
    mode: import.meta.env.VITE_TRANSMISSION_MODE ?? '',
    path: import.meta.env.VITE_TRANSMISSION_PATH ?? '/transmission/',
  },
  availableLocations: (import.meta.env.VITE_AVAILABLE_LOCATIONS ?? '')
    .split(':')
    .filter(Boolean)
});
