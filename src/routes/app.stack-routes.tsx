import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppTabRoutes} from './app.tab-routes';
import {CreateEditRegistry, User} from '../screens';

export const AppStackRoutes = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={AppTabRoutes} />
      <Screen name="registry" component={CreateEditRegistry} />
      <Screen name="user" component={User} />
    </Navigator>
  );
};
