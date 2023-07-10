import {api} from '../api';
import {Registry} from './interface';

interface FindCollaboratorRegistriesProps {
  collaboratorId: string | undefined;
  date: string | undefined;
  period?: string;
}

export const findCollaboratorRegistries = async (
  params: FindCollaboratorRegistriesProps,
): Promise<Registry[]> => {
  const {collaboratorId, date, period} = params;

  let url = `/registry/${collaboratorId}`;

  if (date) {
    url += `?date=${date}`;
  }
  if (period) {
    url += `?period=${period}`;
  }

  const {data} = await api.get(url);

  return data;
};
