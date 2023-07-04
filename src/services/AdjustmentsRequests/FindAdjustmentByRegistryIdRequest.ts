import {api} from '../api';

interface FindAdjustmentRequestProps {
  registryId: string | undefined;
  registryType: string | undefined;
}

export const findAdjustmentByRegistryIdRequest = async (
  params: FindAdjustmentRequestProps,
) => {
  try {
    const response = await api.get(
      `/requests/${params.registryId}?registryType=${params.registryType}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
