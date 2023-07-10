export interface Registry {
  date: Date;
  start?: string;
  start_location?: string;
  end?: string;
  end_location?: string;
  interval_start?: string;
  interval_start_location?: string;
  interval_end?: string;
  interval_end_location?: string;
  collaborator_id?: string;
  id: string;
}

export interface Statistics {
  aditionalTotalHours: string;
  pendingTotalHours: string;
}
