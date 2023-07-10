import {View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {useTheme} from 'styled-components';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const StatisticShimmer = () => {
  const windowWidth = Dimensions.get('screen').width;

  const {COLORS} = useTheme();

  return (
    <ShimmerPlaceHolder
      width={windowWidth * 0.35}
      height={windowWidth * 0.15}
      style={{marginBottom: 8}}
      shimmerStyle={[{borderRadius: 15}]}
      shimmerColors={[
        `${COLORS.GRAY_300}`,
        `${COLORS.WHITE}`,
        `${COLORS.GRAY_300}`,
      ]}></ShimmerPlaceHolder>
  );
};

export const RegistriesShimmer = () => {
  const windowWidth = Dimensions.get('screen').width;

  const {COLORS} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={40}
        style={{marginBottom: 8}}
        shimmerStyle={[{borderRadius: 5}]}
        shimmerColors={[
          `${COLORS.GRAY_50}`,
          `${COLORS.GRAY_100}`,
          `${COLORS.GRAY_50}`,
        ]}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={40}
        style={{marginBottom: 8}}
        shimmerStyle={[{borderRadius: 5}]}
        shimmerColors={[
          `${COLORS.GRAY_50}`,
          `${COLORS.GRAY_100}`,
          `${COLORS.GRAY_50}`,
        ]}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={40}
        style={{marginBottom: 8}}
        shimmerStyle={[{borderRadius: 5}]}
        shimmerColors={[
          `${COLORS.GRAY_50}`,
          `${COLORS.GRAY_100}`,
          `${COLORS.GRAY_50}`,
        ]}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={40}
        style={{marginBottom: 8}}
        shimmerStyle={[{borderRadius: 5}]}
        shimmerColors={[
          `${COLORS.GRAY_50}`,
          `${COLORS.GRAY_100}`,
          `${COLORS.GRAY_50}`,
        ]}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={40}
        style={{marginBottom: 8}}
        shimmerStyle={[{borderRadius: 5}]}
        shimmerColors={[
          `${COLORS.GRAY_50}`,
          `${COLORS.GRAY_100}`,
          `${COLORS.GRAY_50}`,
        ]}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={40}
        style={{marginBottom: 8}}
        shimmerStyle={[{borderRadius: 5}]}
        shimmerColors={[
          `${COLORS.GRAY_50}`,
          `${COLORS.GRAY_100}`,
          `${COLORS.GRAY_50}`,
        ]}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={40}
        style={{marginBottom: 8}}
        shimmerStyle={[{borderRadius: 5}]}
        shimmerColors={[
          `${COLORS.GRAY_50}`,
          `${COLORS.GRAY_100}`,
          `${COLORS.GRAY_50}`,
        ]}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={40}
        style={{marginBottom: 8}}
        shimmerStyle={[{borderRadius: 5}]}
        shimmerColors={[
          `${COLORS.GRAY_50}`,
          `${COLORS.GRAY_100}`,
          `${COLORS.GRAY_50}`,
        ]}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={40}
        style={{marginBottom: 8}}
        shimmerStyle={[{borderRadius: 5}]}
        shimmerColors={[
          `${COLORS.GRAY_50}`,
          `${COLORS.GRAY_100}`,
          `${COLORS.GRAY_50}`,
        ]}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={40}
        style={{marginBottom: 8}}
        shimmerStyle={[{borderRadius: 5}]}
        shimmerColors={[
          `${COLORS.GRAY_50}`,
          `${COLORS.GRAY_100}`,
          `${COLORS.GRAY_50}`,
        ]}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={40}
        style={{marginBottom: 8}}
        shimmerStyle={[{borderRadius: 5}]}
        shimmerColors={[
          `${COLORS.GRAY_50}`,
          `${COLORS.GRAY_100}`,
          `${COLORS.GRAY_50}`,
        ]}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={40}
        style={{marginBottom: 8}}
        shimmerStyle={[{borderRadius: 5}]}
        shimmerColors={[
          `${COLORS.GRAY_50}`,
          `${COLORS.GRAY_100}`,
          `${COLORS.GRAY_50}`,
        ]}></ShimmerPlaceHolder>
    </View>
  );
};
