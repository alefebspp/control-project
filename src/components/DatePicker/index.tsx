import React, {useState} from 'react';
import {View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Container,
  DatePickerButton,
  DatePickerIcon,
  DatePickerText,
} from './styles';
import {getHourMinutesFormated} from '../../utils';
import {DatePickerProps} from './interface';

export const DatePicker = ({
  setHourAndMinutes,
  hourAndMinutes,
}: DatePickerProps) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
        <DatePickerText>Selecionado: {hourAndMinutes}</DatePickerText>
      ) : (
        <DatePickerText>Selecionar horário</DatePickerText>
      )}
    </Container>
  );
};
