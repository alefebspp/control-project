import {useQuery, useMutation} from '@tanstack/react-query';
import {UseRegistriesRequestsProps} from './interface';
import {
  ListRegistriesRequest,
  createRegistryRequest,
  findCollaboratorRegistries,
  updateRegistryRequest,
  calculateRegistriesHours,
} from '../services/RegistriesRequests';

export const useRegistriesRequests = ({
  queryClient,
}: UseRegistriesRequestsProps) => {
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
    collaboratorId?: string,
    date?: string,
    period?: string,
    enabled: boolean = true,
  ) => {
    return useQuery({
      queryKey: ['registry', date, period],
      queryFn: () => findCollaboratorRegistries({collaboratorId, date, period}),
      enabled,
    });
  };

  const useCalculateRegistriesHours = (
    period?: string,
    collaborator_id?: string,
    enabled: boolean = true,
  ) => {
    return useQuery({
      queryKey: ['statistic', period],
      queryFn: () => calculateRegistriesHours(period, collaborator_id),
      enabled,
    });
  };

  return {
    listRegistries,
    useCreateRegistryMutation,
    useUpdateRegistryMutation,
    useFindCollaboratorRegistries,
    useCalculateRegistriesHours,
  };
};
