import {SafeAreaView} from 'react-native-safe-area-context';
import styled, {css} from 'styled-components/native';
import {CalendarClock} from 'lucide-react-native';

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
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-weight: 500;
  `}
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 10px 15px 0 15px;
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

export const AdjustmentsIcon = styled(CalendarClock).attrs(({theme, size}) => ({
  size: 28,
  color: theme.COLORS.BLUE_300,
}))``;
