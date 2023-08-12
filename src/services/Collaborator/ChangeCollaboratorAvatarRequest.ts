import {api} from '../api';
import {ChangeCollaboratorAvatarRequest} from './interface';

export const changeCollaboratorAvatarRequest = async (
  request: ChangeCollaboratorAvatarRequest,
) => {
  try {
    const {collaborator_id, form} = request;
    await api.patch(`/collaborator/avatar/${collaborator_id}`, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.log('ERROR UPLOADING FILE:', error);
  }
};
