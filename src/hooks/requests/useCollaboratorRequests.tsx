import {useMutation, useQuery} from '@tanstack/react-query';
import {
  findCollaboratorRequest,
  changeCollaboratorAvatarRequest,
} from '../../services/Collaborator';
import {UseCollaboratorsRequestsProps} from '../interface';

export const useCollaboratorRequests = ({
  queryClient,
}: UseCollaboratorsRequestsProps) => {
  const useFindCollaborator = (collaborator_id: string | undefined) => {
    return useQuery({
      queryKey: ['collaborator'],
      queryFn: () => findCollaboratorRequest(collaborator_id),
    });
  };

  const useChangeCollaboratorAvatar = () => {
    return useMutation({
      mutationFn: changeCollaboratorAvatarRequest,
      onSuccess: () => {
        queryClient?.invalidateQueries({queryKey: ['collaborator']});
      },
    });
  };

  return {
    useFindCollaborator,
    useChangeCollaboratorAvatar,
  };
};
