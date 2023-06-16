import styled, {css} from 'styled-components/native';
import {CaretLeft} from 'phosphor-react-native';
import {Clock, Calendar} from 'phosphor-react-native';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  gap: 5px;
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

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.GRAY_300,
}))``;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const RegistriesContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Registry = styled(TouchableOpacity)`
  width: 100%;
  height: 40px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-radius: 5px;
`;

export const TitleContainer = styled.View`
  width: 100%;
  height: 10%;
  padding: 10px 10px 0 10px;
`;

export const TitleSection = styled.View`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.COLORS.BLUE_300};
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-weight: 700;
  `}
`;

export const RegistryTextContainer = styled.View`
  width: 20%;
  height: 100%;
  justify-content: flex-end;
`;

export const RegistryText = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const AddRegistryButton = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const AddRegistryIcon = styled(Clock).attrs(({theme}) => ({
  size: 46,
  color: theme.COLORS.BLUE_300,
}))``;

export const CalendarIcon = styled(Calendar).attrs(({theme}) => ({
  size: 46,
  color: theme.COLORS.WHITE,
}))``;
