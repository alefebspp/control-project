import styled, {css} from 'styled-components/native';
import {TextInput} from 'react-native';

interface InputContainerProps {
  backgroundColor?: string;
  borderColor?: string;
}

interface ContainerProps {
  flexDirection?: string;
  gap?: number;
  alignItems?: string;
}

export const InputContainer = styled(TextInput)<InputContainerProps>`
  ${({theme, borderColor, backgroundColor}) => css`
    min-width: 56px;
    color: ${theme.COLORS.GRAY_200};
    border: 1px solid ${borderColor ? borderColor : theme.COLORS.GRAY_200};
    background-color: ${backgroundColor ? backgroundColor : 'transparent'};
    padding: 10px 10px 10px 10px;
    border-radius: 10px;
  `}
`;

export const Container = styled.View<ContainerProps>`
  ${({flexDirection, gap, alignItems}) => css`
    flex-direction: ${flexDirection ? flexDirection : 'column'};
    gap: ${gap ? `${gap}px` : 0};
    ${alignItems && `align-items: ${alignItems}`}
  `}
`;

export const ErrorMessageText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.ERROR};
  `}
`;

export const InputLabel = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BLUE_400};
  `}
`;
