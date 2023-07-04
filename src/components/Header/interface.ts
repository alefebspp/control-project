import {Dispatch, SetStateAction} from 'react';

export interface HeaderProps {
  firstSectionName: string;
  secondSectionName: string;
  activePage: string;
  setActivePage: Dispatch<SetStateAction<string>>;
}
