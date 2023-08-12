import {ArrowsClockwise, User} from 'phosphor-react-native';
import {TouchableOpacity} from 'react-native';
import styled, {css} from 'styled-components/native';

interface UserAvatarProps {
  size: number;
}

interface AvatarButtonProps {
  size: number;
  headerAvatar: boolean;
}

export const AvatarButton = styled(TouchableOpacity)<AvatarButtonProps>`
  ${({theme, size, headerAvatar}) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${size / 2}px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.COLORS.GRAY_100};
    margin: ${headerAvatar ? '0 10px 5px 10px' : 0};
  `}
`;

export const ChangeAvatarButton = styled(TouchableOpacity)`
  ${({theme}) => css`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: ${theme.COLORS.WHITE};
    position: absolute;
    bottom: 0;
    right: 0;
    border: 1px solid ${theme.COLORS.BLUE_100};
  `}
`;

export const ChangeIcon = styled(ArrowsClockwise).attrs(({theme}) => ({
  size: 18,
  color: theme.COLORS.BLUE_300,
}))`
  margin: auto;
`;

export const AvatarIcon = styled(User).attrs(({theme, size}) => ({
  size: size,
  color: theme.COLORS.GRAY_200,
  weight: 'fill',
}))``;

export const UserAvatar = styled.Image<UserAvatarProps>`
  ${({size}) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${size / 2}px;
  `}
`;
