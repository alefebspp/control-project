import {api} from '../api';

interface RequestData {
  registryId: string | undefined;
  registryType: string;
  registryData: {
    start?: string;
    start_location?: string;
    end?: string;
    end_location?: string;
    interval_start?: string;
    interval_start_location?: string;
    interval_end?: string;
    interval_end_location?: string;
  };
}

export const updateRegistryRequest = async ({
  registryId,
  registryData,
  registryType,
}: RequestData) => {
  try {
    const {data} = await api.patch(`registry/${registryId}`, {
      registry_type: registryType,
      ...registryData,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
