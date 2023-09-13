import {Eye, AtSign, EyeOff} from 'lucide-react-native';
import styled, {css} from 'styled-components/native';

interface FocusProps {
  focused: boolean;
}

interface ContainerProps {
  flexDirection: string;
}

interface IconProps {
  hidden?: boolean;
}

export const Container = styled.View<ContainerProps>`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection};
`;

export const IconContainer = styled.TouchableOpacity<FocusProps>`
  width: 20%;
  border-bottom-width: 1px;
  border-color: ${({theme, focused}) =>
    focused ? theme.COLORS.WHITE : theme.COLORS.MARINE_BLUE};
`;

export const Input = styled.TextInput<FocusProps>`
  width: 80%;
  padding: 15px;
  border: 0;
  border-bottom-width: 1px;
  border-color: ${({theme, focused}) =>
    focused ? theme.COLORS.WHITE : theme.COLORS.MARINE_BLUE};
`;

export const Label = styled.Text<FocusProps>`
  font-size: 16px;
  color: ${({focused, theme}) =>
    focused ? theme.COLORS.WHITE : theme.COLORS.MARINE_BLUE};
`;

export const ErrorMessageText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
    margin-top: 5px;
  `}
`;

export const EmailIcon = styled(AtSign).attrs(({theme, color}) => ({
  size: 32,
  weight: 'regular',
  color: color,
}))`
  margin: auto;
`;

export const EyeIcon = styled(Eye).attrs(({theme, color}) => ({
  size: 32,
  weight: 'regular',
  color: color,
}))`
  margin: auto;
`;

export const EyeOffIcon = styled(EyeOff).attrs(({theme, color}) => ({
  size: 32,
  weight: 'regular',
  color: color,
}))`
  margin: auto;
`;
