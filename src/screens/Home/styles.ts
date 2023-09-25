import styled, {css} from 'styled-components/native';
import {Clock, Calendar, User} from 'phosphor-react-native';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface HeaderButtonProps {
  lightBackground?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const PageContainer = styled.View`
  flex: 1;
  gap: 10px;
  padding: 0 15px;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const RegistriesContainer = styled.View`
  flex: 1;
`;

export const Registry = styled(TouchableOpacity)`
  width: 100%;
  height: 40px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_100};
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-radius: 5px;
`;

export const RegistryTextContainer = styled.View`
  width: 20%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const RegistryText = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-size: ${({theme}) => theme.FONT_SIZE.XS}px;
`;

export const HeaderButton = styled(TouchableOpacity)<HeaderButtonProps>`
  ${({theme, lightBackground}) => css`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    justify-content: center;
    align-items: center;
    background-color: ${lightBackground
      ? theme.COLORS.GRAY_100
      : theme.COLORS.GRAY_300};
    margin: 0 10px 5px 10px;
  `}
`;

export const Header = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 12%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.COLORS.GRAY_100};
  justify-content: space-between;
  align-items: flex-end;
`;

export const UserIcon = styled(User).attrs(({theme}) => ({
  size: 26,
  color: theme.COLORS.GRAY_200,
  weight: 'fill',
}))``;

export const AddRegistryIcon = styled(Clock).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.WHITE,
  weight: 'fill',
}))``;

export const CalendarIcon = styled(Calendar).attrs(({theme}) => ({
  size: 46,
  color: theme.COLORS.WHITE,
}))``;
