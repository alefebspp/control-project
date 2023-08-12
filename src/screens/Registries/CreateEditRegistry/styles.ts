import styled, {css} from 'styled-components/native';
import {CaretLeft, X, ClockClockwise} from 'phosphor-react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface IconButtonProps {
  width: number;
  height: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_50};
  gap: 10px;
`;

export const Header = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 12%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  justify-content: space-between;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 15px;
  flex-direction: column;
  justify-content: space-between;
`;

export const IconButton = styled.TouchableOpacity<IconButtonProps>`
  ${({width, height, theme}) => css`
    width: ${width}px;
    height: ${height}px;
    background-color: ${theme.COLORS.WHITE};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  `}
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 15%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
`;

export const RegistryContainer = styled.View`
  width: 50%;
  height: 100%;
  flex-direction: column;
`;

export const Registry = styled.View`
  background-color: ${({theme}) => theme.COLORS.BLUE_100};
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const DateText = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const RegistryTypeLabel = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: 400;
  `}
`;

export const ActionsContainer = styled.View`
  width: 40%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: row;
  gap: 10px;
`;

export const UpdateIcon = styled(ClockClockwise).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.PENDING,
}))``;

export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.GRAY_300,
}))``;

export const DeleteIcon = styled(X).attrs(({theme}) => ({
  size: 36,
  color: 'red',
}))``;
