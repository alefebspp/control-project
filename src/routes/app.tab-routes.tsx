import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import {HouseLine, ClockClockwise} from 'phosphor-react-native';
import {Home, Adjustments} from '../screens';
import {useAuthContext} from '../hooks/useAuth';
import {Loading} from '../components/Loading';

export const AppTabRoutes = () => {
  const {Navigator, Screen} = createBottomTabNavigator();

  const {asyncStorageDataIsLoading} = useAuthContext();

  const {COLORS} = useTheme();

  if (asyncStorageDataIsLoading) {
    return <Loading />;
  }

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name="registries"
        component={Home}
        options={{
          tabBarActiveTintColor: COLORS.BLUE_300,
          tabBarInactiveTintColor: COLORS.GRAY_200,
          tabBarIcon: ({focused}) => (
            <HouseLine
              size={36}
              color={focused ? COLORS.BLUE_300 : COLORS.GRAY_200}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
          tabBarLabel: 'Início',
        }}
      />
      <Screen
        name="adjustments"
        component={Adjustments}
        options={{
          tabBarActiveTintColor: COLORS.BLUE_300,
          tabBarInactiveTintColor: COLORS.GRAY_200,
          tabBarIcon: ({focused}) => (
            <ClockClockwise
              size={36}
              color={focused ? COLORS.BLUE_300 : COLORS.GRAY_200}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
          tabBarLabel: 'Ajustes',
        }}
      />
    </Navigator>
  );
};
