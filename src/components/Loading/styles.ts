import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
