import {TextInputProps} from 'react-native';

export interface InputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
  isTextArea?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  labelIcon?: React.ReactNode;
}
