import { type Config, CONFIG_SCHEMA } from '../types';

export const config: Config = CONFIG_SCHEMA.parse({
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.PORT || '9090'),
  transmission: {
    host: process.env.TRANSMISSION_HOST || 'localhost',
    port: parseInt(process.env.TRANSMISSION_PORT || '9091'),
    username: process.env.TRANSMISSION_USERNAME || '',
    password: process.env.TRANSMISSION_PASSWORD || '',
    sslMode: process.env.TRANSMISSION_SSL_MODE || 'none',
    url: process.env.TRANSMISSION_URL || '/transmission/'
  }
});
