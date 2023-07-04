import styled, {css} from 'styled-components/native';
import {ClockCounterClockwise} from 'phosphor-react-native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const DatePickerButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.PENDING};
  border-radius: 30px;
`;

export const DatePickerText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const DatePickerIcon = styled(ClockCounterClockwise).attrs(
  ({theme}) => ({
    size: 36,
    color: theme.COLORS.GRAY_200,
  }),
)``;
