import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens';

export const AuthRoutes = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen initialParams={{}} name="login" component={Login} />
    </Navigator>
  );
};
