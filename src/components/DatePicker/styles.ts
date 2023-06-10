import styled, {css} from 'styled-components/native';
import {Clock, NotePencil, MapPin} from 'phosphor-react-native';
import {TouchableOpacity} from 'react-native';

interface DatePickerButtonProps {
  backgroundColor: string;
}

interface ActionButtonProps {
  backgroundColor: string;
}

export const ModalContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  width: 100%;
  height: 50%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px;
  border-radius: 10px;
`;

export const LocationContainer = styled.View`
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 30%;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  height: 30%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ActionButton = styled(TouchableOpacity)<ActionButtonProps>`
  width: 40%;
  height: 50%;
  background-color: ${({backgroundColor}) => backgroundColor};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
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

export const Text = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const DatePickerButton = styled(TouchableOpacity)<DatePickerButtonProps>`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: 10px;
`;

export const DatePickerIcon = styled(Clock).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.WHITE,
}))``;

export const UpdateIcon = styled(NotePencil).attrs(({theme}) => ({
  size: 36,
  color: 'green',
}))``;

export const LocationIcon = styled(MapPin).attrs(({theme}) => ({
  size: 56,
  color: theme.COLORS.GRAY_200,
  weight: 'fill',
}))``;
