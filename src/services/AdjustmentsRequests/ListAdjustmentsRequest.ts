import {api} from '../api';
import {Adjustment} from './interface';

export const listAdjustmentsRequest = async (): Promise<Adjustment[]> => {
  try {
    const {data} = await api.get('/requests');

    return data;
  } catch (error) {
    throw error;
  }
};
