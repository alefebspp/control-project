import {Dispatch, SetStateAction} from 'react';

export interface DatePickerProps {
  setHourAndMinutes: Dispatch<SetStateAction<string | undefined>>;
  hourAndMinutes: string | undefined;
}
