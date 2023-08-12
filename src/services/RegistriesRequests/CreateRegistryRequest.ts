import {api} from '../api';

export interface CreateRegistryRequestData {
  collaborator_id: string | undefined;
  company_id: string | undefined;
  date: string;
  start?: string;
  start_location?: string;
  end?: string;
  end_location?: string;
  interval_start?: string;
  interval_start_location?: string;
  interval_end?: string;
  interval_end_location?: string;
}

export const createRegistryRequest = async (
  requestData: CreateRegistryRequestData,
) => {
  try {
    const {data} = await api.post('/registry/create', requestData);

    return data;
  } catch (error) {
    console.log(error);
  }
};
