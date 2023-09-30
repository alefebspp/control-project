import styled, {css} from 'styled-components/native';
import {TouchableOpacity, Dimensions} from 'react-native';
import {History, Check, X, UserCircle} from 'lucide-react-native';

const windowHeight = Dimensions.get('screen').height;

interface StatusProps {
  color?: string;
  rowDirection?: boolean;
}

interface TextProps {
  size?: number;
  weight?: number;
}

interface StatusContainerStyleProps {
  borderColor?: string;
}

export const Container = styled.View`
  width: 100%;
  height: 20%;
`;

export const StatusContainer = styled.TouchableOpacity<StatusContainerStyleProps>`
  ${({theme}) => css`
    width: 100%;
    height: 80px;
    border: 2px solid ${theme.COLORS.GRAY_100};
    flex-direction: row;
    justify-content: flex-start;
    gap: 5px;
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

export const DetailsContainer = styled.View<StatusContainerStyleProps>`
  ${({theme, borderColor}) => css`
    width: 100%;
    height: 300px;
    background-color: ${theme.COLORS.WHITE};
    border: 2px solid ${borderColor};
    margin-bottom: 10px;
  `}
`;

export const Detail = styled.View`
  width: 100%;
  height: 50px;
  padding: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.COLORS.GRAY_100};
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
  width: 35%;
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
    font-size: ${theme.FONT_SIZE.SM}px;
    font-weight: 700;
  `}
`;

export const StatusIconContainer = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const IconContainer = styled.View`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;
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

export const ReviewerAvatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const AvatarIcon = styled(UserCircle).attrs(({theme, size}) => ({
  size: 25,
  color: theme.COLORS.GRAY_200,
}))``;

export const PendingIcon = styled(History).attrs(({theme, size}) => ({
  size: size,
  color: theme.COLORS.PENDING,
}))``;

export const AcceptedIcon = styled(Check).attrs(({theme, color, size}) => ({
  size: size,
  color: color ? color : theme.COLORS.ACCEPTED,
}))``;

export const RejectedIcon = styled(X).attrs(({theme, size, color}) => ({
  size: size,
  color: color ?? theme.COLORS.ERROR,
}))``;
