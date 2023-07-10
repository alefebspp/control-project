import {api} from '../api';
import {Adjustment} from './interface';

export const listAdjustmentsRequest = async (
  collaborator_id?: string,
  period?: string,
): Promise<Adjustment[]> => {
  try {
    let url: string = '';

    if (collaborator_id) {
      url = `?collaboratorId=${collaborator_id}`;
    }
    if (period) {
      url = `?period=${period}`;
    }
    if (collaborator_id && period) {
      url = `?collaboratorId=${collaborator_id}&period=${period}`;
    }

    const {data} = await api.get(`/requests${url}`);

    return data;
  } catch (error) {
    throw error;
  }
};
