import {NavigationContainer} from '@react-navigation/native';
import {AppTabRoutes} from './app.tab-routes';
import {AppRoutes} from './app.routes';
import {useTheme} from 'styled-components';
import {View} from 'react-native';
import {useAuthContext} from '../hooks/useAuth';

export const Routes = () => {
  const {COLORS} = useTheme();

  const {user} = useAuthContext();

  return (
    <NavigationContainer>
      {user?.user_id ? <AppTabRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};
