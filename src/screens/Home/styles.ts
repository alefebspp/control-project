import styled from 'styled-components/native';
import {CaretLeft} from 'phosphor-react-native';
import theme from '../../theme';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 10%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.GRAY_300,
}))``;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;
