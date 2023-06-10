import styled, {css} from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export type ButtonStyleTypes = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonStyleTypes;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-width: 56px;
  min-height: 56px;

  justify-content: center;
  align-items: center;

  background-color: ${({theme, type}) =>
    type == 'PRIMARY' ? theme.COLORS.BLUE_300 : theme.COLORS.BLUE_400};
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;
