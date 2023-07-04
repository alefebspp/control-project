import {Registry} from '../../services/RegistriesRequests/interface';

export interface SelectedTime {
  time: string | undefined;
  location: string | undefined;
}

export interface DatePickerProps {
  registry?: Registry | undefined;
  registryType: keyof Pick<
    Registry,
    'start' | 'end' | 'interval_start' | 'interval_end'
  >;
}

export interface DatePickerTypeProps {
  isLoading: boolean;
  addressLocation: string | undefined;
  hideDatePicker: () => void;
  registry?: Registry | undefined;
  registryType: keyof Pick<
    Registry,
    'start' | 'end' | 'interval_start' | 'interval_end'
  >;
}
