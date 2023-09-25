export interface CreateRegistryParams {
  time: string | undefined;
  location: string | undefined;
  registryType: string;
  closeModalFunction: () => void;
}

export interface UpdateRegistryParams {
  time: string | undefined;
  location: string | undefined;
  registryType: string;
  registryId?: string;
  closeModalFunction: () => void;
}
