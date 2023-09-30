import styled, {css} from 'styled-components/native';
import {X} from 'lucide-react-native';

interface EmptyTextProps {
  highlight?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 50%;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
`;
export const EmptyText = styled.Text<EmptyTextProps>`
  ${({theme, highlight}) => css`
    color: ${highlight ? theme.COLORS.BLUE_400 : theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: ${highlight ? 600 : 400};
    text-decoration: ${highlight ? 'underline' : 'none'};
    text-align: center;
  `}
`;

export const EmptyIcon = styled(X).attrs(({theme}) => ({
  size: 56,
  color: theme.COLORS.ERROR,
}))``;
