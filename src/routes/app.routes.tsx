import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, CreateEditRegistry} from '../screens';

export const AppRoutes = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}}>
      {/* <Screen name="login" component={Login} /> */}
      <Screen name="home" component={Home} />
      <Screen name="registry" component={CreateEditRegistry} />
    </Navigator>
  );
};
