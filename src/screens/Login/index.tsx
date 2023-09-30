import {useState} from 'react';
import Toast from 'react-native-toast-message';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginForm, Container, Text, ItemsContainer} from './styles';
import {Button} from '../../components/Button';
import {useForm, Controller} from 'react-hook-form';
import {loginSchema} from '../../utils/schemas';
import {useAuthContext} from '../../hooks/useAuth';
import {getErrorMessage} from '../../utils/AppError';
import {AuthInput, MovingClock} from '../../components';

type FormDataProps = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataProps>({
    resolver: yupResolver(loginSchema),
  });

  const {signIn} = useAuthContext();

  const handleLogin = async ({email, password}: FormDataProps) => {
    try {
      setIsLoading(true);
      await signIn({email, password});
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      const message = getErrorMessage(error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: message,
      });
    }
  };

  return (
    <Container behavior="height" keyboardVerticalOffset={-200}>
      <LoginForm
        resizeMode="cover"
        source={require('../../assets/login-bg.jpg')}>
        <ItemsContainer width={80} height={20}>
          <MovingClock />
        </ItemsContainer>
        <ItemsContainer height={25} width={80}>
          <Controller
            name="email"
            control={control}
            render={({field: {onChange, value}}) => (
              <AuthInput
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
                inputMode="email"
                label="Email"
                iconType="email"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({field: {onChange, value}}) => (
              <AuthInput
                secureTextEntry={hidePassword}
                hiddenPassword={hidePassword}
                setPasswordVisibility={setHidePassword}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
                label="Senha"
                iconType="password"
              />
            )}
          />
        </ItemsContainer>
        <ItemsContainer justifyContent="flex-start" gap={10} width={80}>
          <Button isLoading={isLoading} onPress={handleSubmit(handleLogin)}>
            Entrar
          </Button>
          <Text>Esqueci minha senha</Text>
        </ItemsContainer>
      </LoginForm>
    </Container>
  );
};
