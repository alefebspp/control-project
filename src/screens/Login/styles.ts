import styled, {css} from 'styled-components/native';
import {ClockClockwise, Envelope, LockKey} from 'phosphor-react-native';
import {Button} from '../../components/Button';

interface ItemsContainerProps {
  width?: number;
  height?: number;
  flexDirection?: string;
  justifyContent?: string;
  gap?: number;
}

export const Container = styled.KeyboardAvoidingView`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const LoginForm = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ItemsContainer = styled.View<ItemsContainerProps>`
  ${props => css`
    width: ${!props.width ? 'auto' : `${props.width}%`};
    height: ${!props.height ? 'auto' : `${props.height}%`};
    display: flex;
    flex-direction: ${props.flexDirection ? props.flexDirection : 'column'};
    justify-content: ${
      props.justifyContent ? props.justifyContent : 'space-between'
    };
    gap: ${props.gap ? `${props.gap}px` : 0}
    align-items: center;
  `}
`;

export const Text = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    text-decoration: underline;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: 600;
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
