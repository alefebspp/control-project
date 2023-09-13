import {Dispatch, SetStateAction} from 'react';
import {TextInputProps} from 'react-native';

export interface AuthInputProps extends TextInputProps {
  label: string;
  iconType?: string;
  errorMessage?: string;
  setPasswordVisibility?: Dispatch<SetStateAction<boolean>>;
  hiddenPassword?: boolean;
}
