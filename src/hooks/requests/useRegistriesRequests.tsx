import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {
  createRegistryRequest,
  findCollaboratorRegistries,
  updateRegistryRequest,
} from '../../services/RegistriesRequests';

export const useRegistriesRequests = () => {
  const queryClient = useQueryClient();

  const update = () => {
    const {mutateAsync, isLoading} = useMutation({
      mutationFn: updateRegistryRequest,
      onSuccess: () => {
        queryClient?.invalidateQueries({queryKey: ['registry']});
        queryClient?.invalidateQueries({queryKey: ['registries']});
      },
    });

    return {
      execute: mutateAsync,
      isLoading,
    };
  };

  const create = () => {
    const {mutateAsync, isLoading} = useMutation({
      mutationFn: createRegistryRequest,
      onSuccess: () => {
        queryClient?.invalidateQueries({queryKey: ['registry']});
        queryClient?.invalidateQueries({queryKey: ['registries']});
      },
    });

    return {
      execute: mutateAsync,
      isLoading,
    };
  };

  const find = (
    collaboratorId?: string,
    date?: string,
    period?: string,
    enabled: boolean = true,
  ) => {
    const {data, isLoading, refetch} = useQuery({
      queryKey: ['registry', date, period],
      queryFn: () => findCollaboratorRegistries({collaboratorId, date, period}),
      enabled,
    });

    const isEmpty = data?.length === 0;

    return {
      data,
      isLoading,
      isEmpty,
      refetch,
    };
  };

  return {
    create,
    update,
    find,
  };
};
