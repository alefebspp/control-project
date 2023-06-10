import styled, {css} from 'styled-components/native';
import {TextInput} from 'react-native';

export const InputContainer = styled(TextInput)`
  ${({theme}) => css`
    min-height: 56px;
    min-width: 56px;
    border-radius: 5px;
    color: ${theme.COLORS.BLUE_200};
    border: 1px solid ${theme.COLORS.GRAY_200};
  `}
`;

export const Container = styled.View`
  flex-direction: column;
`;
export const InputLabel = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;
