import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Container,
  DatePickerButton,
  DatePickerIcon,
  DatePickerText,
} from './styles';
import {getHourMinutesFormated} from '../../utils';
import {DatePickerProps} from './interface';
import {useKeyboard} from '../../hooks/useKeyboard';

export const DatePicker = ({
  setHourAndMinutes,
  hourAndMinutes,
}: DatePickerProps) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const {keyboardIsVisible} = useKeyboard();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const registry = getHourMinutesFormated(date);
    setHourAndMinutes(registry);
    hideDatePicker();
  };

  if (keyboardIsVisible) {
    return null;
  }

  return (
    <Container>
      <DatePickerButton onPress={showDatePicker}>
        <DatePickerIcon />
      </DatePickerButton>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {hourAndMinutes ? (
        <DatePickerText>Horário selecionado: {hourAndMinutes}</DatePickerText>
      ) : (
        <DatePickerText>Selecionar horário</DatePickerText>
      )}
    </Container>
  );
};
