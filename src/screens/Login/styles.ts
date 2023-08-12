import styled, {css} from 'styled-components/native';
import {ClockClockwise, Envelope, LockKey} from 'phosphor-react-native';

export const Container = styled.KeyboardAvoidingView`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.COLORS.GRAY_50};
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const LoginForm = styled.View`
  border-radius: 5px;
  width: 100%;
  height: 80%;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-weight: 700;
  `}
`;

export const Logo = styled.View`
  width: 100px;
  height: 100px;
  background-color: ${({theme}) => theme.COLORS.BLUE_400};
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 50px;
`;

export const LogoIcon = styled(ClockClockwise).attrs(({theme}) => ({
  size: 50,
  weight: 'regular',
  color: theme.COLORS.WHITE,
}))``;

export const EmailIcon = styled(Envelope).attrs(({theme}) => ({
  size: 30,
  weight: 'regular',
  color: theme.COLORS.GRAY_200,
}))``;

export const LockIcon = styled(LockKey).attrs(({theme}) => ({
  size: 30,
  weight: 'regular',
  color: theme.COLORS.GRAY_200,
}))``;
