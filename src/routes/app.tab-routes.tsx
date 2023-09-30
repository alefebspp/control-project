import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import {Home as HomeIcon, CalendarClock} from 'lucide-react-native';
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
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: 'white'},
      }}>
      <Screen
        name="registries"
        component={Home}
        options={{
          tabBarActiveTintColor: COLORS.BLUE_300,
          tabBarInactiveTintColor: COLORS.GRAY_200,
          tabBarIcon: ({focused}) => (
            <HomeIcon
              size={28}
              color={focused ? COLORS.BLUE_300 : COLORS.GRAY_200}
            />
          ),
        }}
      />
      <Screen
        name="adjustments"
        component={Adjustments}
        options={{
          tabBarActiveTintColor: COLORS.BLUE_300,
          tabBarInactiveTintColor: COLORS.GRAY_200,
          tabBarIcon: ({focused}) => (
            <CalendarClock
              size={28}
              color={focused ? COLORS.BLUE_300 : COLORS.GRAY_200}
            />
          ),
        }}
      />
    </Navigator>
  );
};
