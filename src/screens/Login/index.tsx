import {LoginForm, Container, LoginTitle} from './styles';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

export const Login: React.FC = () => {
  const navigation = useNavigation();

  //Navigation with params
  // const handleNavigate = () => {
  //   navigation.navigate('home', {email: 'test', password: 'test'});
  // };

  const handleNavigate = () => {
    navigation.navigate('home');
  };

  return (
    <Container>
      <LoginForm>
        <LoginTitle>Fazer login</LoginTitle>
        <Input label="Email" placeholder="Digite seu email" />
        <Input label="Senha" placeholder="Digite sua senha" />
        <Button title="Login" onPress={handleNavigate} />
      </LoginForm>
    </Container>
  );
};
