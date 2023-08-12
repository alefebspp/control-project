import styled, {css} from 'styled-components/native';
import {Clock, NotePencil, MapPin, ClockClockwise} from 'phosphor-react-native';
import {TouchableOpacity} from 'react-native';

interface DatePickerButtonProps {
  backgroundColor: string;
}

interface ContainerContentProps {
  height: number;
}

interface ActionButtonProps {
  backgroundColor: string;
}

export const ModalContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalContent = styled.View<ContainerContentProps>`
  width: 100%;
  height: ${({height}) => height}%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 10px 0;
  border-radius: 10px;
`;

export const LocationContainer = styled.View<ContainerContentProps>`
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: ${({height}) => height}%;
  background-color: ${({theme}) => theme.COLORS.GRAY_200};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0 10px 10px 10px;
`;

export const RequestContainer = styled.View`
  width: 100%;
  padding: 0 10px;
  height: 50%;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.View<ContainerContentProps>`
  width: 100%;
  height: ${({height}) => height}%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ActionButton = styled(TouchableOpacity)<ActionButtonProps>`
  width: 120px;
  height: 40px;
  background-color: ${({backgroundColor}) => backgroundColor};
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const ActionButtonText = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: bold;
  `}
`;

export const TextContainer = styled.View`
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
`;

export const TimeText = styled.Text`
  font-size: 58px;
  color: ${({theme}) => theme.COLORS.GRAY_300};
`;

export const RequestTitle = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  color: ${({theme}) => theme.COLORS.PENDING};
  font-weight: 500;
  margin: 0 auto;
`;

export const Text = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  text-align: center;
`;

export const ModalDatePickerButton = styled(
  TouchableOpacity,
)<DatePickerButtonProps>`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: 10px;
`;

export const DatePickerIcon = styled(Clock).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.BLUE_300,
}))``;

export const UpdateIcon = styled(ClockClockwise).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.PENDING,
}))``;

export const LocationIcon = styled(MapPin).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.WHITE,
  weight: 'fill',
}))``;
