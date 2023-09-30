import {MapPin, CalendarClock, CalendarCheck} from 'lucide-react-native';
import styled, {css} from 'styled-components/native';

interface LabelContainerProps {
  justifyContent: string;
}

interface LocationClockContainerStyleProps {
  adjustmentInfo?: boolean;
}

export const LocationClockContainer = styled.View<LocationClockContainerStyleProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({adjustmentInfo}) =>
    adjustmentInfo ? 'flex-start' : 'center'};
  align-items: center;
  padding: ${({adjustmentInfo}) => (adjustmentInfo ? '0 15px' : 0)};
  gap: ${({adjustmentInfo}) => (adjustmentInfo ? 10 : 0)}px;
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
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_300};
  `}
`;

export const AdjustmentTypeText = styled.Text`
  ${({theme}) => css`
    font-weight: 400;
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BLUE_400};
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

export const CalendarCheckIcon = styled(CalendarCheck).attrs(({theme}) => ({
  size: 28,
  color: theme.COLORS.BLUE_300,
}))``;
