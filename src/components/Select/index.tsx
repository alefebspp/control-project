import SelectDropdown from 'react-native-select-dropdown';
import {CalendarIcon, Container} from './styles';
import {useTheme} from 'styled-components';
import {SelectProps} from './interface';
import {months} from './options';

export const Select = ({currentMonthDescription, setPeriod}: SelectProps) => {
  const year = new Date().getFullYear();

  const {COLORS} = useTheme();

  return (
    <Container>
      <SelectDropdown
        data={months}
        buttonStyle={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.BLUE_300,
          borderRadius: 10,
        }}
        buttonTextStyle={{
          color: COLORS.WHITE,
          fontSize: 18,
          fontWeight: '600',
        }}
        defaultButtonText={currentMonthDescription}
        onSelect={(selectedItem, index) => {
          setPeriod(`${year}-${selectedItem.value}`);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return `${selectedItem.label} de ${year}`;
        }}
        rowTextForSelection={(item, index) => {
          return item.label;
        }}
        renderDropdownIcon={() => <CalendarIcon />}
        dropdownIconPosition="left"
      />
    </Container>
  );
};
