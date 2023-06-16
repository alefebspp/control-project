import {useQuery, useMutation} from '@tanstack/react-query';
import {UseReactQueryHookProps} from './interface';
import {
  ListRegistriesRequest,
  createRegistryRequest,
  findCollaboratorRegistries,
  updateRegistryRequest,
} from '../services/RegistriesRequests';

export const useReactQueryHook = ({queryClient}: UseReactQueryHookProps) => {
  const listRegistries = () => {
    return useQuery({
      queryKey: ['registries'],
      queryFn: ListRegistriesRequest,
    });
  };

  const useUpdateRegistryMutation = () => {
    return useMutation({
      mutationFn: updateRegistryRequest,
      onSuccess: () => {
        queryClient?.invalidateQueries({queryKey: ['registry']});
        queryClient?.invalidateQueries({queryKey: ['registries']});
      },
    });
  };

  const useCreateRegistryMutation = () => {
    return useMutation({
      mutationFn: createRegistryRequest,
      onSuccess: () => {
        queryClient?.invalidateQueries({queryKey: ['registry']});
        queryClient?.invalidateQueries({queryKey: ['registries']});
      },
    });
  };

  const useFindCollaboratorRegistries = (
    collaboratorId: string | undefined,
    date: string | undefined,
  ): any => {
    return useQuery({
      queryKey: ['registry', date],
      queryFn: () => findCollaboratorRegistries({collaboratorId, date}),
    });
  };

  return {
    listRegistries,
    useCreateRegistryMutation,
    useUpdateRegistryMutation,
    useFindCollaboratorRegistries,
  };
};
