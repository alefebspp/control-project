import {LoginForm, Container, LoginTitle} from './styles';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

export const Login: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('home');
  };

  return (
    <Container>
      <LoginForm>
        <LoginTitle>Fazer login</LoginTitle>
        <Input label="Email" />
        <Input label="Senha" />
        <Button title="Entrar" onPress={handleNavigate} />
      </LoginForm>
    </Container>
  );
};
