import {api} from '../api';
import {GetCollaboratorHourRecordsResponse} from './interface';

export const getCollaboratorHourRecords = async (
  collaborator_id?: string,
  period?: string,
): Promise<GetCollaboratorHourRecordsResponse> => {
  try {
    const {data} = await api.get(
      `/hour-record/${collaborator_id}?period=${period}`,
    );
    return data;
  } catch (error) {
    throw error;
  }
};
