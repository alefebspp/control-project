import {View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const ShiftShimmer = () => {
  const windowWidth = Dimensions.get('screen').width;

  return (
    <ShimmerPlaceHolder
      width={windowWidth - 20}
      height={30}
      style={{marginBottom: 8}}></ShimmerPlaceHolder>
  );
};
