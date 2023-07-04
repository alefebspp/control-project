import {View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const AdjustmentsShimmer = () => {
  const windowWidth = Dimensions.get('screen').width;

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
        height={70}
        style={{marginBottom: 8}}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={70}
        style={{marginBottom: 8}}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={70}
        style={{marginBottom: 8}}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={70}
        style={{marginBottom: 8}}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={70}
        style={{marginBottom: 8}}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={70}
        style={{marginBottom: 8}}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={70}
        style={{marginBottom: 8}}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={70}
        style={{marginBottom: 8}}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={70}
        style={{marginBottom: 8}}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={70}
        style={{marginBottom: 8}}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={70}
        style={{marginBottom: 8}}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        width={windowWidth - 20}
        height={70}
        style={{marginBottom: 8}}></ShimmerPlaceHolder>
    </View>
  );
};
