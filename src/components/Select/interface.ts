import {Dispatch, SetStateAction} from 'react';

export interface SelectProps {
  currentMonthDescription: string | undefined;
  setPeriod: Dispatch<SetStateAction<string>>;
}
