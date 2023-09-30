import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {useTheme} from 'styled-components';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

interface AvatarShimmerProps {
  size: number;
  headerAvatar: boolean;
}

export const AvatarShimmer = ({size, headerAvatar}: AvatarShimmerProps) => {
  const {COLORS} = useTheme();

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
      ]}
      shimmerColors={[
        `${COLORS.GRAY_50}`,
        `${COLORS.WHITE}`,
        `${COLORS.GRAY_50}`,
      ]}></ShimmerPlaceHolder>
  );
};
