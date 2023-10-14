import axios, {AxiosInstance} from 'axios';
import {API_SERVER_URL} from '@env';
import {AppError} from '../utils/AppError';

type SignOut = () => void;

type APIInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void;
};

export const api = axios.create({
  baseURL: API_SERVER_URL,
}) as APIInstanceProps;

api.registerInterceptTokenManager = signOut => {
  const interceptTokenManager = api.interceptors.response.use(
    response => response,
    requestError => {
      if (requestError?.response?.status == 401) {
        signOut();
      }

      if (requestError.response && requestError.response.data) {
        return Promise.reject(new AppError(requestError.response.data.message));
      } else {
        return Promise.reject(
          new AppError('Error no servidor.Tente novamente mais tarde'),
        );
      }
    },
  );

  return () => {
    api.interceptors.response.eject(interceptTokenManager);
  };
};

// api.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response && error.response.data) {

//       return Promise.reject(new AppError(error.response.data.message));
//     } else {
//       return Promise.reject(
//         new AppError('Error no servidor.Tente novamente mais tarde'),
//       );
//     }
//   },
// );
