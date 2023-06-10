import {Registry} from '../../services/RegistriesRequests/interface';

export interface SelectedTime {
  time: string | undefined;
  location: string | undefined;
}

export interface DatePickerProps {
  registry?: Registry | undefined;
  registryType: keyof Registry;
}
