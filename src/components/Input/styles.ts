import styled, {css} from 'styled-components/native';
import {TextInput} from 'react-native';

export const InputContainer = styled(TextInput)`
  ${({theme}) => css`
    min-height: 56px;
    min-width: 56px;
    color: ${theme.COLORS.WHITE};
    border-bottom-width: 3px;
    border-bottom-color: ${theme.COLORS.GRAY_200};
    padding: 0;
    padding-bottom: 3px;
  `}
`;

export const Container = styled.View`
  flex-direction: column;
`;

export const ErrorMessageText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.ERROR};
  `}
`;

export const InputLabel = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
