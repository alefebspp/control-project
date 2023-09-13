import {TouchableOpacityProps, Text} from 'react-native';
import {ButtonStyleTypes, Container, Title} from './styles';

type Props = TouchableOpacityProps & {
  type?: ButtonStyleTypes;
  children: React.ReactNode;
  isLoading?: boolean;
};

export const Button = ({
  type = 'PRIMARY',
  children,
  isLoading,
  ...rest
}: Props) => {
  return (
    <Container isLoading={isLoading} type={type} {...rest}>
      <Title>{children}</Title>
    </Container>
  );
};
