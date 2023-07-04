import {api} from '../api';
import {Adjustment, ValidateAdjustmentProps} from './interface';

export const validateAdjustmentRequest = async (
  validateData: ValidateAdjustmentProps,
): Promise<Adjustment> => {
  try {
    const {data} = await api.patch(
      `/requests/${validateData.adjustment_id}`,
      validateData.data,
    );

    return data;
  } catch (error) {
    throw error;
  }
};
