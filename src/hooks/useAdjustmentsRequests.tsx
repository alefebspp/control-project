import {useMutation, useQuery} from '@tanstack/react-query';
import {UseAdjustmentsRequestsProps} from './interface';
import {
  createAdjustmentRequest,
  listAdjustmentsRequest,
  findAdjustmentByRegistryIdRequest,
  validateAdjustmentRequest,
} from '../services/AdjustmentsRequests';

export const useAdjustmentsRequests = ({
  queryClient,
}: UseAdjustmentsRequestsProps) => {
  const useValidateAdjustmentRequest = () => {
    return useMutation({
      mutationFn: validateAdjustmentRequest,
      onSuccess: () => {
        queryClient?.invalidateQueries({queryKey: ['adjustments']});
        queryClient?.invalidateQueries({queryKey: ['registry']});
        queryClient?.invalidateQueries({queryKey: ['registries']});
      },
    });
  };

  const useFindAdjustmentRequest = (
    registryId: string | undefined,
    registryType: string | undefined,
  ) => {
    return useQuery({
      queryKey: ['adjustments'],
      queryFn: () =>
        findAdjustmentByRegistryIdRequest({registryId, registryType}),
    });
  };

  const useCreateAdjustmentRequest = () => {
    return useMutation({
      mutationFn: createAdjustmentRequest,
      onSuccess: () => {
        queryClient?.invalidateQueries({queryKey: ['adjustments']});
      },
    });
  };

  const useListAdjustmentsRequest = (
    collaborator_id?: string,
    period?: string,
  ) => {
    return useQuery({
      queryFn: () => listAdjustmentsRequest(collaborator_id, period),
      queryKey: ['adjustments', period],
    });
  };

  return {
    useCreateAdjustmentRequest,
    useListAdjustmentsRequest,
    useFindAdjustmentRequest,
    useValidateAdjustmentRequest,
  };
};
