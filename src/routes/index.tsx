import {NavigationContainer} from '@react-navigation/native';
import {AuthRoutes} from './auth.routes';
import {useAuthContext} from '../hooks/useAuth';
import {AppStackRoutes} from './app.stack-routes';

export const Routes = () => {
  const {user} = useAuthContext();

  return (
    <NavigationContainer>
      {user?.user_id ? <AppStackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
