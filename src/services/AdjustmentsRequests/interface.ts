import {Collaborator} from '../Collaborator/interface';
import {Registry} from '../RegistriesRequests/interface';

export interface Adjustment {
  id: string;
  registry_id: string;
  collaborator_id: string;
  status?: string;
  reason: string;
  registry_type: keyof Pick<
    Registry,
    'start' | 'end' | 'interval_start' | 'interval_end'
  >;
  new_value: string;
  previous_value?: string;
  registry_location?: string;
  new_location: string;
  registry: Registry;
  collaborator: Collaborator;
  reviewer?: string;
  adjustment_reviewer?: Collaborator;
  reviewer_response?: string;
}

export interface CreateAdjustmentProps {
  registry_id: string | undefined;
  reason: string;
  registry_location: string | undefined;
  new_location: string | undefined;
  registry_type: string;
  new_value: string | undefined;
  previous_value: string | undefined;
  collaborator_id: string | undefined;
}

export interface ValidateAdjustmentProps {
  adjustment_id: string | undefined;
  data: {
    reviewer: string | undefined;
    new_status: string;
  };
}
