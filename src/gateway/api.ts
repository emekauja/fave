import axios from 'axios';
import token from '../../config.json';

const url = 'https://api.thecatapi.com/';

let AppApi = axios.create({
  baseURL: url,
});

AppApi.interceptors.request.use(async function (config) {
  try {
    //  if (!config) return null;
    // value previously stored
    config.headers.Authorization = `Bearer ${token.api_key}`;
  } catch (error) {
    // error reading value
    console.log('error getting token', error);
  }

  return config;
});

export default AppApi;
