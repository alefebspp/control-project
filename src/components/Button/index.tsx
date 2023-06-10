import {TouchableOpacityProps, Text} from 'react-native';
import {ButtonStyleTypes, Container, Title} from './styles';

type Props = TouchableOpacityProps & {
  type?: ButtonStyleTypes;
  title: string;
};

export const Button = ({type = 'PRIMARY', title, ...rest}: Props) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
