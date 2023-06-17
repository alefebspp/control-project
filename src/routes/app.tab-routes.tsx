import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import {Clock, HouseLine} from 'phosphor-react-native';
import {Home, CreateEditRegistry} from '../screens';

export const AppTabRoutes = () => {
  const {Navigator, Screen} = createBottomTabNavigator();

  const {COLORS} = useTheme();

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
    </Navigator>
  );
};
