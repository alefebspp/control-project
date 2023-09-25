import {View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {useTheme} from 'styled-components';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const HoursBalanceSkeleton = () => {
  const windowWidth = Dimensions.get('screen').width;
  const {COLORS} = useTheme();
  return (
    <ShimmerPlaceHolder
      width={windowWidth - 30}
      height={150}
      style={{borderRadius: 15, marginTop: 10}}
      shimmerColors={[
        `${COLORS.GRAY_50}`,
        `${COLORS.WHITE}`,
        `${COLORS.GRAY_50}`,
      ]}
    />
  );
};
