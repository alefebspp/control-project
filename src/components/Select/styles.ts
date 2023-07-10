import {Calendar} from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 10%;
  padding: 10px 10px 0 10px;
`;

export const CalendarIcon = styled(Calendar).attrs(({theme}) => ({
  size: 46,
  color: theme.COLORS.WHITE,
}))``;
