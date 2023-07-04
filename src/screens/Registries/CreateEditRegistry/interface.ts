import {Registry} from '../../../services/RegistriesRequests/interface';
export type {RouteProps} from '../../../routes/interface';

export interface RegistryInputProps {
  registry: Registry | undefined;
  label: string;
  registryType: keyof Pick<
    Registry,
    'start' | 'end' | 'interval_start' | 'interval_end'
  >;
}
