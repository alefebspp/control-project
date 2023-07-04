import {StyleSheet} from 'react-native';
import {Calendar} from 'phosphor-react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled, {css} from 'styled-components/native';

export const PageContainer = styled.View`
  width: 100%;
  height: 100%;
  gap: 5px;
  background-color: ${({theme}) => theme.COLORS.GRAY_50};
`;

export const Header = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 12%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: flex-end;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-weight: 700;
  `}
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

export const AdjustmentsContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

export const CalendarIcon = styled(Calendar).attrs(({theme}) => ({
  size: 46,
  color: theme.COLORS.WHITE,
}))``;
