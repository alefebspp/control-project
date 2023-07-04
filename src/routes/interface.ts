import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  home: undefined;
  login: undefined;
  adjustments: undefined;
  registry: {
    registryDate?: Date | undefined;
  };
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type RoutesProps = RouteProp<RootStackParamList>;
export type RouteProps<Route extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  Route
>;
