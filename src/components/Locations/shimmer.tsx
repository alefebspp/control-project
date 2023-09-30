import {View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {useTheme} from 'styled-components';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const LocationsShimmer = () => {
  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;
  const {COLORS} = useTheme();

  return (
    <View
      style={{
        width: windowWidth,
        height: 0.3 * windowHeight,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ShimmerPlaceHolder
        width={windowWidth}
        height={0.3 * windowHeight}
        style={{marginBottom: 8}}
        shimmerStyle={[{borderRadius: 5}]}
        shimmerColors={[
          `${COLORS.GRAY_50}`,
          `${COLORS.WHITE}`,
          `${COLORS.GRAY_50}`,
        ]}></ShimmerPlaceHolder>
    </View>
  );
};
