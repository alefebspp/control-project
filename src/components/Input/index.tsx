import {InputContainer, Container, InputLabel} from './styles';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';

interface InputProps extends TextInputProps {
  label: string;
}

export const Input = ({label, ...props}: InputProps) => {
  const {COLORS} = useTheme();

  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <InputContainer {...props} placeholderTextColor={COLORS.GRAY_100} />
    </Container>
  );
};
