import {api} from '../api';
import {Registry} from './interface';

interface FindCollaboratorRegistriesProps {
  collaboratorId: string | undefined;
  date: string | undefined;
}

export const findCollaboratorRegistries = async (
  params: FindCollaboratorRegistriesProps,
): Promise<Registry | Registry[]> => {
  const {data} = await api.get(
    `/registry/${params.collaboratorId}${
      params.date ? `?date=${params.date}` : null
    }`,
  );

  return data;
};
