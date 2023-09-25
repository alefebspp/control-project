import {CalendarDays} from 'lucide-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  padding: 10px 10px 0 10px;
`;

export const CalendarIcon = styled(CalendarDays).attrs(({theme}) => ({
  size: 25,
  color: theme.COLORS.GRAY_200,
}))``;
