import {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import Toast from 'react-native-toast-message';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginForm, Container, Logo, LogoIcon, ButtonText} from './styles';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {useForm, Controller} from 'react-hook-form';
import {loginSchema} from '../../utils/schemas';
import {useAuthContext} from '../../hooks/useAuth';
import {AppError} from '../../utils/AppError';
import {useTheme} from 'styled-components';

type FormDataProps = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {COLORS} = useTheme();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataProps>({
    resolver: yupResolver(loginSchema),
  });

  const {signIn, user} = useAuthContext();

  const handleLogin = async ({email, password}: FormDataProps) => {
    try {
      setIsLoading(true);
      await signIn({email, password});
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível fazer login';
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: title,
      });
    }
  };

  return (
    <Container>
      <LoginForm>
        <Logo>
          <LogoIcon />
        </Logo>
        <Controller
          name="email"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              label="Email"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
              inputMode="email"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              label="Senha"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
              secureTextEntry
            />
          )}
        />
        <Button isLoading={isLoading} onPress={handleSubmit(handleLogin)}>
          {isLoading ? (
            <ActivityIndicator size="small" color={COLORS.WHITE} />
          ) : (
            <ButtonText>Entrar</ButtonText>
          )}
        </Button>
      </LoginForm>
    </Container>
  );
};
