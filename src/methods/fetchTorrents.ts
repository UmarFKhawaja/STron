import { config } from '../config';
// import { Transmission } from '@ctrl/transmission';

export async function fetchTorrents(username: string, password: string): Promise<void> {
  console.log(config, username, password);

  // const transmission = new Transmission({
  //   baseUrl: `http://${config.transmission.host}:${config.transmission.port}/`,
  //   username,
  //   password
  // });
  //
  // const allData = await transmission.getAllData();
  //
  // console.log(allData);
}
