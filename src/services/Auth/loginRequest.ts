import {api} from '../api';
import {LoginRequest} from '.';

export const loginRequest = async (loginData: LoginRequest) => {
  try {
    const {data} = await api.post('/auth/login', loginData);

    return data;
  } catch (error) {
    throw error;
  }
};
