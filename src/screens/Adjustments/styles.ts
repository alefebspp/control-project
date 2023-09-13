import {StyleSheet} from 'react-native';
import {Calendar, ClockClockwise} from 'phosphor-react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled, {css} from 'styled-components/native';

export const PageContainer = styled.View`
  width: 100%;
  height: 100%;
  gap: 5px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Header = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 12%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.COLORS.GRAY_100};
  justify-content: center;
  align-items: flex-end;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.BLUE_300};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-weight: 500;
  `}
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
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

export const AdjustmentIcon = styled(ClockClockwise).attrs(({theme}) => ({
  size: 30,
  color: theme.COLORS.BLUE_300,
}))``;
