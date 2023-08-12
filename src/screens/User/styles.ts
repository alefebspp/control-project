import styled, {css} from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CaretLeft, SignOut, UserFocus} from 'phosphor-react-native';

interface UserInfosContentProps {
  height?: number;
  backgroundColor?: string;
  justifyContent?: string;
}

interface UserShiftContainerProps {
  width?: number;
  justifyContent?: string;
}

interface UserInfoTextProps {
  weight?: number;
  color?: string;
}

export interface IconButtonProps {
  width: number;
  height: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_50};
  gap: 10px;
`;

export const Header = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 12%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  justify-content: space-between;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const UserInfosContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

export const UserInfosContent = styled.View<UserInfosContentProps>`
  ${({height, backgroundColor, justifyContent}) => css`
    width: 100%;
    height: ${height ? `${height}%` : 'auto'};
    background-color: ${backgroundColor ? backgroundColor : ''};
    flex-direction: row;
    justify-content: ${justifyContent ? justifyContent : 'center'};
    gap: 5px;
  `}
`;

export const UserShiftContainer = styled.View<UserShiftContainerProps>`
  ${({width, justifyContent}) => css`
    width: ${width ? `${width}%` : '100%'};
    flex-direction: row;
    justify-content: ${justifyContent ? justifyContent : 'space-between'};
    background-color: white;
  `}
`;

export const UserInfoText = styled.Text<UserInfoTextProps>`
  ${({theme, color, weight}) => css`
    color: ${color ? color : theme.COLORS.GRAY_200};
    font-weight: ${weight ? weight : 300};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const SignOutButton = styled.TouchableOpacity`
  width: 40%;
  height: 40px;
  background-color: ${({theme}) => theme.COLORS.GRAY_200};
  border-radius: 15px;
  justify-content: center;
  gap: 10px;
  align-items: center;
  flex-direction: row;
`;

export const SignOutText = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: 700;
  `}
`;

export const IconButton = styled.TouchableOpacity<IconButtonProps>`
  ${({width, height, theme}) => css`
    width: ${width}px;
    height: ${height}px;
    background-color: ${theme.COLORS.WHITE};
    border-radius: 45px;
    justify-content: center;
    align-items: center;
  `}
`;

export const UserImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
`;

export const SignOutIcon = styled(SignOut).attrs(({theme}) => ({
  size: 26,
  color: theme.COLORS.WHITE,
  weight: 'bold',
}))``;

export const UserPhotoIcon = styled(UserFocus).attrs(({theme}) => ({
  size: 76,
  color: theme.COLORS.GRAY_200,
  weight: 'light',
}))``;

export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.GRAY_300,
}))``;
