import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const LoginForm = styled.View`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 5px;
  width: 100%;
  height: 60%;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const LoginTitle = styled.Text`
  ${({theme}) => css`
    margin: 0 auto;
    color: ${theme.COLORS.BLUE_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;
