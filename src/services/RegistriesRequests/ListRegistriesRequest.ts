import {api} from '../api';
import {AxiosError} from 'axios';
import {Registry} from './interface';
import axios from 'axios';

export const ListRegistriesRequest = async () => {
  try {
    const {data} = await api.get('/registry');
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  }
};
