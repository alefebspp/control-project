import {useQuery} from '@tanstack/react-query';
import {findCollaboratorRequest} from '../services/Collaborator';

export const useCollaboratorRequests = () => {
  const useFindCollaborator = (collaborator_id: string | undefined) => {
    return useQuery({
      queryKey: ['collaborator'],
      queryFn: () => findCollaboratorRequest(collaborator_id),
    });
  };

  return {
    useFindCollaborator,
  };
};
