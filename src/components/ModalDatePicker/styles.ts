import styled from 'styled-components/native';
import {
  CalendarPlus,
  MessageSquare,
  Pencil,
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

export const MessageIcon = styled(MessageSquare).attrs(({theme}) => ({
  size: 28,
  color: theme.COLORS.BLUE_300,
}))``;
