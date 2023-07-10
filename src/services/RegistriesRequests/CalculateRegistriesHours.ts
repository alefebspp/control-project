import {api} from '../api';
import {Statistics} from './interface';

export const calculateRegistriesHours = async (
  period?: string,
  collaborator_id?: string,
): Promise<Statistics> => {
  const {data} = await api.get(
    `/registry/calculate/${collaborator_id}?period=${period}`,
  );

  return data;
};
