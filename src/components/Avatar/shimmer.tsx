import {View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {useTheme} from 'styled-components';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

interface AvatarShimmerProps {
  size: number;
  headerAvatar: boolean;
}

export const AvatarShimmer = ({size, headerAvatar}: AvatarShimmerProps) => {
  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;
  const {COLORS} = useTheme();
  //margin: 0 10px 5px 10px;

  return (
    <ShimmerPlaceHolder
      width={size}
      height={size}
      shimmerStyle={[
        {
          borderRadius: size / 2,
          marginLeft: headerAvatar ? 10 : 0,
          marginBottom: headerAvatar ? 5 : 0,
        },
      ]}></ShimmerPlaceHolder>
  );
};
