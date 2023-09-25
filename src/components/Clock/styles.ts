import {MapPin, CalendarClock} from 'lucide-react-native';
import styled, {css} from 'styled-components/native';

interface LabelContainerProps {
  justifyContent: string;
}

export const LocationClockContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const LabelContainer = styled.View<LabelContainerProps>`
  width: 100%;
  height: 100%;
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: center;
  flex-direction: row;
`;

export const ClockText = styled.Text`
  ${({theme}) => css`
    font-weight: 600;
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const LocationIcon = styled(MapPin).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.GRAY_200,
}))``;

export const CalendarClockIcon = styled(CalendarClock).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.GRAY_200,
}))``;
