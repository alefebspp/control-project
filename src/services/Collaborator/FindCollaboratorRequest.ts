import {api} from '../api';
import {Collaborator} from './interface';

export const findCollaboratorRequest = async (
  collaborator_id: string | undefined,
): Promise<Collaborator> => {
  try {
    const {data} = await api.get(`/collaborator/find/${collaborator_id}`);

    return data;
  } catch (error) {
    throw error;
  }
};
