import {NavigationContainer} from '@react-navigation/native';
import {AppTabRoutes} from './app.tab-routes';
import {AppRoutes} from './app.routes';
import {useTheme} from 'styled-components';
import {View} from 'react-native';

export const Routes = () => {
  const {COLORS} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: COLORS.GRAY_100}}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
};
