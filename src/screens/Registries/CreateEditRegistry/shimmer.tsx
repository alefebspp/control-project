import {View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const RegistryShimmer = () => {
  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <ShimmerPlaceHolder
        width={windowWidth * 0.9}
        height={70}
        style={{marginBottom: 12}}
        shimmerStyle={[{borderRadius: 5}]}></ShimmerPlaceHolder>
      <View
        style={{
          width: 0.9 * windowWidth,
          height: 0.15 * windowHeight,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <ShimmerPlaceHolder
          width={windowWidth * 0.45}
          height={50}
          style={{marginBottom: 8}}
          shimmerStyle={[{borderRadius: 5}]}></ShimmerPlaceHolder>
        <ShimmerPlaceHolder
          width={50}
          height={50}
          style={{marginBottom: 8}}
          shimmerStyle={[{borderRadius: 5}]}></ShimmerPlaceHolder>
      </View>
      <View
        style={{
          width: 0.9 * windowWidth,
          height: 0.15 * windowHeight,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <ShimmerPlaceHolder
          width={windowWidth * 0.45}
          height={50}
          style={{marginBottom: 8}}
          shimmerStyle={[{borderRadius: 5}]}></ShimmerPlaceHolder>
        <ShimmerPlaceHolder
          width={50}
          height={50}
          style={{marginBottom: 8}}
          shimmerStyle={[{borderRadius: 5}]}></ShimmerPlaceHolder>
      </View>
      <View
        style={{
          width: 0.9 * windowWidth,
          height: 0.15 * windowHeight,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <ShimmerPlaceHolder
          width={windowWidth * 0.45}
          height={50}
          style={{marginBottom: 8}}
          shimmerStyle={[{borderRadius: 5}]}></ShimmerPlaceHolder>
        <ShimmerPlaceHolder
          width={50}
          height={50}
          style={{marginBottom: 8}}
          shimmerStyle={[{borderRadius: 5}]}></ShimmerPlaceHolder>
      </View>
      <View
        style={{
          width: 0.9 * windowWidth,
          height: 0.15 * windowHeight,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <ShimmerPlaceHolder
          width={windowWidth * 0.45}
          height={50}
          style={{marginBottom: 8}}
          shimmerStyle={[{borderRadius: 5}]}></ShimmerPlaceHolder>
        <ShimmerPlaceHolder
          width={50}
          height={50}
          style={{marginBottom: 8}}
          shimmerStyle={[{borderRadius: 5}]}></ShimmerPlaceHolder>
      </View>
    </View>
  );
};
