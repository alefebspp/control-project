import styled from 'styled-components/native';
import {
  CalendarPlus,
  MessageSquare,
  Pencil,
  X,
  History,
  Clock,
} from 'lucide-react-native';
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

interface TextStyleProps {
  color?: string;
  size?: number;
  weight?: number;
}

export const ModalContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View<ContainerContentProps>`
  width: 100%;
  height: ${({height}) => height}%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 10px 0;
`;

export const ModalHeader = styled.View`
  width: 100%;
  height: 80px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_100};
  padding: 0 15px;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const RequestContainer = styled.View`
  padding: 0 15px;
  flex: 1;
  justify-content: space-evenly;
`;

export const ButtonsContainer = styled.View<ContainerContentProps>`
  width: 100%;
  height: ${({height}) => height}%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const CloseButton = styled(TouchableOpacity)`
  width: 36px;
  height: 36px;
  background-color: ${({theme}) => theme.COLORS.GRAY_50};
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-left: auto;
`;

export const TextContainer = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  padding: 10px 0;
  border: 1px solid red;
`;

export const TimeText = styled.Text`
  font-size: 58px;
  color: ${({theme}) => theme.COLORS.GRAY_300};
  margin: auto;
`;

export const Text = styled.Text<TextStyleProps>`
  font-size: ${({theme, size}) => (size ? size : theme.FONT_SIZE.SM)}px;
  color: ${({theme, color}) => (color ? color : theme.COLORS.WHITE)};
  font-weight: ${({weight}) => (weight ? weight : 400)};
  text-align: center;
`;

export const InputContainer = styled.View``;

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

export const UpdateIcon = styled(History).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.PENDING,
}))``;

export const CalendarIcon = styled(CalendarPlus).attrs(({theme}) => ({
  size: 32,
  color: theme.COLORS.BLUE_300,
}))``;

export const PencilIcon = styled(Pencil).attrs(({theme}) => ({
  size: 32,
  color: theme.COLORS.BLUE_300,
}))``;

export const CloseIcon = styled(X).attrs(({theme}) => ({
  size: 26,
  color: theme.COLORS.GRAY_200,
}))``;

export const MessageIcon = styled(MessageSquare).attrs(({theme}) => ({
  size: 28,
  color: theme.COLORS.BLUE_300,
}))``;
