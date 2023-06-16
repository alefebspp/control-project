import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateEditRegistry} from '../screens';
import {AppTabRoutes} from './app.tab-routes';

export const AppStackRoutes = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        initialParams={{}}
        name="registry"
        component={CreateEditRegistry}
      />
      <Screen name="feed" component={AppTabRoutes} />
    </Navigator>
  );
};
