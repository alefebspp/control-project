import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

type RootStackParamList = {
  home: undefined;
  login: undefined;
  registry: {
    registryDate?: Date | undefined;
  };
};

export type NavigationProps = BottomTabNavigationProp<RootStackParamList>;
export type RoutesProps = RouteProp<RootStackParamList>;
export type RouteProps<Route extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  Route
>;
