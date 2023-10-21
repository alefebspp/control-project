import {Registry} from '../../../services/RegistriesRequests/interface';

export interface CreateAdjustmentContentProps {
  hideDatePicker: () => void;
  registry?: Registry | undefined;
  registryType: keyof Pick<
    Registry,
    'start' | 'end' | 'interval_start' | 'interval_end'
  >;
}

export interface FormDataProps {
  reason: string;
}
