import styled, {css} from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SignOut, UserCircle} from 'phosphor-react-native';

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
`;

export const UserInfosContent = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;

export const UserInfoText = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
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

export const SignOutIcon = styled(SignOut).attrs(({theme}) => ({
  size: 26,
  color: theme.COLORS.WHITE,
  weight: 'bold',
}))``;

export const UserIcon = styled(UserCircle).attrs(({theme}) => ({
  size: 86,
  color: theme.COLORS.GRAY_200,
  weight: 'fill',
}))``;
