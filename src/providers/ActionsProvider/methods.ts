import { TransmissionClient } from '@brielov/transmission-rpc';
import { config } from '../../config';

export function create(username: string, password: string): TransmissionClient {
  const scheme: string = config.transmission.mode === 'SSL' ? 'https' : 'http';
  const { host, port } = config.transmission;
  const url: string = `${scheme}://${host}:${port}/`;

  const transmissionClient = new TransmissionClient(url, {
    username,
    password
  });

  return transmissionClient;
}
