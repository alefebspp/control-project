import {useQuery} from '@tanstack/react-query';
import {getCollaboratorHourRecords} from '../../services/HourRecord';

export const useHourRecordRequests = () => {
  const find = (collaborator_id?: string, period?: string) => {
    const {data, isLoading, refetch} = useQuery({
      queryKey: ['hourRecord', period],
      queryFn: () => getCollaboratorHourRecords(collaborator_id, period),
      enabled: false,
    });

    return {
      data,
      isLoading,
      refetch,
    };
  };

  return {
    find,
  };
};
