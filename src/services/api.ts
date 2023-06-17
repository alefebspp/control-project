import axios from 'axios';
import {API_SERVER_URL} from '@env';

export const api = axios.create({
  baseURL: API_SERVER_URL,
});
