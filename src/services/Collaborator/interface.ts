export interface Collaborator {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  shift_start: string;
  shift_end: string;
  interval_start: string;
  interval_end: string;
  avatar: string | null;
}

export interface ChangeCollaboratorAvatarRequest {
  form: FormData;
  collaborator_id: string | undefined;
}
