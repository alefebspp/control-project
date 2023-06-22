import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import {Clock, HouseLine, GearSix} from 'phosphor-react-native';
import {Home, CreateEditRegistry, User} from '../screens';
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
        name="home"
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
        name="registry"
        component={CreateEditRegistry}
        options={({navigation, route}) => {
          return {
            tabBarActiveTintColor: COLORS.BLUE_300,
            tabBarInactiveTintColor: COLORS.GRAY_200,
            tabBarIcon: ({focused}) => (
              <Clock
                size={36}
                color={focused ? COLORS.BLUE_300 : COLORS.GRAY_200}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
            tabBarLabel: 'Registro',
          };
        }}
      />
      <Screen
        name="user"
        component={User}
        options={{
          tabBarActiveTintColor: COLORS.BLUE_300,
          tabBarInactiveTintColor: COLORS.GRAY_200,
          tabBarIcon: ({focused}) => (
            <GearSix
              size={36}
              color={focused ? COLORS.BLUE_300 : COLORS.GRAY_200}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
          tabBarLabel: 'Config.',
        }}
      />
    </Navigator>
  );
};
