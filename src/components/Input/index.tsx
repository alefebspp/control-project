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
}

export const Input = ({label, errorMessage, ...props}: InputProps) => {
  const {COLORS} = useTheme();

  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <InputContainer
        {...props}
        placeholderTextColor={COLORS.GRAY_100}
        textAlignVertical="bottom"
      />
      <ErrorMessageText>{errorMessage}</ErrorMessageText>
    </Container>
  );
};
