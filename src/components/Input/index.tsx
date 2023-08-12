import {
  InputContainer,
  Container,
  InputLabel,
  ErrorMessageText,
} from './styles';
import {useTheme} from 'styled-components/native';
import {InputProps} from './interface';

export const Input = ({
  label,
  errorMessage,
  isTextArea,
  backgroundColor,
  borderColor,
  labelIcon,
  ...props
}: InputProps) => {
  const {COLORS} = useTheme();

  return (
    <Container>
      <Container alignItems="center" gap={5} flexDirection="row">
        {labelIcon}
        <InputLabel>{label}</InputLabel>
      </Container>
      <InputContainer
        {...props}
        placeholderTextColor={COLORS.GRAY_100}
        textAlignVertical={isTextArea ? 'top' : 'center'}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      />
      <ErrorMessageText>{errorMessage}</ErrorMessageText>
    </Container>
  );
};
