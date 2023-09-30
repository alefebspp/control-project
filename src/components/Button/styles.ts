import styled, {css} from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export type ButtonStyleTypes = 'PRIMARY' | 'SECONDARY';

type ContainerProps = {
  type: ButtonStyleTypes;
  isLoading?: boolean;
};

type TextProps = {
  type: ButtonStyleTypes;
};

const secondaryContainerButtonStyle = css`
  width: 120px;
  height: 40px;
  border-radius: 30px;
`;

const primaryContainerButtonStyle = css`
  min-width: 100%;
  min-height: 56px;
  border-radius: 15px;
`;

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${({theme, isLoading, type}) => css`
    ${type == 'PRIMARY'
      ? primaryContainerButtonStyle
      : secondaryContainerButtonStyle}
    justify-content: center;
    align-items: center;
    opacity: ${isLoading ? 0.4 : 1};
    background-color: ${type == 'PRIMARY'
      ? theme.COLORS.WHITE
      : theme.COLORS.BLUE_300};
  `}
`;

export const Title = styled.Text<TextProps>`
  ${({theme, type}) => css`
    color: ${type == 'PRIMARY' ? theme.COLORS.MARINE_BLUE : theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${type == 'PRIMARY' ? theme.FONT_SIZE.LG : theme.FONT_SIZE.MD}px;
    font-weight: 700;
  `}
`;
