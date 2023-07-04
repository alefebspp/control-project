import styled, {css} from 'styled-components/native';
import {XCircle} from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;
  height: 50%;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
`;
export const EmptyText = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-weight: 700;
  `}
`;

export const EmptyIcon = styled(XCircle).attrs(({theme}) => ({
  size: 56,
  color: theme.COLORS.GRAY_200,
  weight: 'fill',
}))``;
