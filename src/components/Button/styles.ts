import styled, {css} from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export type ButtonStyleTypes = 'PRIMARY' | 'SECONDARY';

type ContainerProps = {
  type: ButtonStyleTypes;
  isLoading?: boolean;
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  min-width: 56px;
  min-height: 56px;
  justify-content: center;
  align-items: center;
  opacity: ${({isLoading}) => (isLoading ? 0.4 : 1)};
  border-radius: 30px;
  background-color: ${({theme, type}) =>
    type == 'PRIMARY' ? theme.COLORS.BLUE_300 : theme.COLORS.BLUE_400};
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-weight: 700;
  `}
`;
