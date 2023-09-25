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
          backgroundColor: COLORS.WHITE,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.GRAY_200,
        }}
        buttonTextStyle={{
          color: COLORS.GRAY_200,
          fontSize: 16,
          fontWeight: '400',
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
