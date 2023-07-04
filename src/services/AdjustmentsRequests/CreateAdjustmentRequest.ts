import {api} from '../api';
import {Adjustment, CreateAdjustmentProps} from './interface';

export const createAdjustmentRequest = async (
  adjustmentData: CreateAdjustmentProps,
): Promise<Adjustment> => {
  try {
    const {data} = await api.post('/requests', adjustmentData);

    return data;
  } catch (error) {
    throw error;
  }
};
