import axios from 'axios';
import {API_SERVER_URL} from '@env';
import {AppError} from '../utils/AppError';

export const api = axios.create({
  baseURL: API_SERVER_URL,
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(
        new AppError('Error no servidor.Tente novamente mais tarde'),
      );
    }
  },
);
