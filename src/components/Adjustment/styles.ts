import styled, {css} from 'styled-components/native';
import {TouchableOpacity, Dimensions} from 'react-native';
import {ClockClockwise, Check, X} from 'phosphor-react-native';

const windowHeight = Dimensions.get('screen').height;

interface StatusProps {
  color?: string;
  rowDirection?: boolean;
}

interface TextProps {
  size?: number;
  weight?: number;
}

export const Container = styled.View`
  width: 100%;
  height: 20%;
  border: 1px solid red;
`;

export const StatusContainer = styled.TouchableOpacity`
  ${({theme}) => css`
    width: 100%;
    height: ${0.08 * windowHeight}px;
    background-color: ${theme.COLORS.WHITE};
    flex-direction: row;
    gap: 10px;
    margin-bottom: 10px;
  `}
`;

export const ResponseContainer = styled.View<StatusProps>`
  width: 100%;
  height: 100px;
  background-color: ${({theme, color}) =>
    color ? color : theme.COLORS.GRAY_50};
  flex-direction: ${({rowDirection}) => (rowDirection ? 'row' : 'column')};
`;

export const DetailsContainer = styled.View`
  ${({theme}) => css`
    width: 100%;
    height: ${0.5 * windowHeight}px;
    background-color: ${theme.COLORS.WHITE};
    margin-bottom: 10px;
  `}
`;

export const DetailsContentContainer = styled.View`
  width: 100%;
  height: 80%;
  padding: 5px;
  gap: 5px;
`;

export const Detail = styled.View`
  width: 100%;
  padding: 5px;
  background-color: ${({theme}) => theme.COLORS.GRAY_50};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleContainer = styled.View<StatusProps>`
  width: 100%;
  height: 20%;
  background-color: ${({color, theme}) =>
    color ? color : theme.COLORS.GRAY_50};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 5px;
`;

export const CloseButton = styled.TouchableOpacity`
  height: 100%;
  width: 10%;
  justify-content: center;
  align-items: center;
`;

export const StatusDetailsContainer = styled.View`
  width: 70%;
  height: 100%;
  justify-content: space-between;
`;

export const DetailLabel = styled.Text<TextProps>`
  ${({theme, size, weight}) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${size ? size : theme.FONT_SIZE.XS}px;
    font-weight: ${weight ? weight : 700};
  `}
`;

export const StatusLabel = styled.Text<StatusProps>`
  ${({theme, color}) => css`
    color: ${color ? color : theme.COLORS.GRAY_50};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: 700;
  `}
`;

export const StatusIconContainer = styled.View<StatusProps>`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({color, theme}) =>
    color ? color : theme.COLORS.GRAY_50};
`;

export const ValidateButtonContainer = styled.View`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ValidateButton = styled(TouchableOpacity)<StatusProps>`
  width: 50px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color};
  border-radius: 10px;
`;

export const PendingIcon = styled(ClockClockwise).attrs(({theme, size}) => ({
  size: size,
  color: theme.COLORS.WHITE,
  weight: 'bold',
}))``;

export const AcceptedIcon = styled(Check).attrs(({theme, color, size}) => ({
  size: size,
  color: color ? color : theme.COLORS.WHITE,
  weight: 'bold',
}))``;

export const RejectedIcon = styled(X).attrs(({theme, size}) => ({
  size: size,
  color: theme.COLORS.WHITE,
  weight: 'bold',
}))``;
