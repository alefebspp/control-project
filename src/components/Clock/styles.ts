import styled, {css} from 'styled-components/native';

interface ContainerProps {
  justifyContent: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 10%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: center;
  border-radius: 5px;
  flex-direction: row;
`;

export const ClockText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;
