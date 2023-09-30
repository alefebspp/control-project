import {TouchableOpacityProps, ActivityIndicator} from 'react-native';
import {ButtonStyleTypes, Container, Title} from './styles';
import {useTheme} from 'styled-components';
import {useKeyboard} from '../../hooks/useKeyboard';

type Props = TouchableOpacityProps & {
  type?: ButtonStyleTypes;
  children: React.ReactNode;
  isLoading?: boolean;
  canHide?: boolean;
};

export const Button = ({
  type = 'PRIMARY',
  children,
  isLoading,
  canHide = false,
  ...rest
}: Props) => {
  const {COLORS} = useTheme();
  const {keyboardIsVisible} = useKeyboard();

  if (keyboardIsVisible && canHide) {
    return null;
  }

  return (
    <Container isLoading={isLoading} type={type} {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color={COLORS.WHITE} />
      ) : (
        <Title type={type}>{children}</Title>
      )}
    </Container>
  );
};
