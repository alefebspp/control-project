import {
  InputContainer,
  Container,
  InputLabel,
  ErrorMessageText,
} from './styles';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';

interface InputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
  isTextArea?: boolean;
}

export const Input = ({
  label,
  errorMessage,
  isTextArea,
  ...props
}: InputProps) => {
  const {COLORS} = useTheme();

  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <InputContainer
        {...props}
        placeholderTextColor={COLORS.GRAY_100}
        textAlignVertical={isTextArea ? 'top' : 'center'}
      />
      <ErrorMessageText>{errorMessage}</ErrorMessageText>
    </Container>
  );
};
