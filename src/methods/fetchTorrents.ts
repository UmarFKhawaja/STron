import { config } from '../config';
// import { Transmission } from '@ctrl/transmission';

export async function fetchTorrents(): Promise<void> {
  console.log(config);

  // const transmission = new Transmission({
  //   baseUrl: `http://${config.transmission.host}:${config.transmission.port}/`,
  //   username: config.transmission.username,
  //   password: config.transmission.password
  // });
  //
  // const allData = await transmission.getAllData();
  //
  // console.log(allData);
}
