import styled, {css} from 'styled-components/native';
import {
  Clock,
  Calendar,
  ChartLineUp,
  TrendUp,
  TrendDown,
  User,
} from 'phosphor-react-native';
import {Dimensions, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface MonthStatisticContainerProps {
  isOpen?: boolean;
}

interface StatisticContainerProps {
  width?: number;
  height?: number;
  flexDirection?: string;
}

interface TitleContainerProps {
  borderBottonWidth?: number;
  backgroundColor?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
}

interface TitleProps {
  weight?: number;
  size?: number;
  color?: string;
}

interface HeaderButtonProps {
  lightBackground?: boolean;
}

const windowWidth = Dimensions.get('screen').width;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.COLORS.GRAY_50};
`;

export const PageContainer = styled.View`
  flex: 1;
  gap: 5px;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const RegistriesContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Registry = styled(TouchableOpacity)`
  width: 100%;
  height: 40px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_100};
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-radius: 5px;
`;

export const RegistryTextContainer = styled.View`
  width: 20%;
  height: 100%;
  justify-content: flex-end;
`;

export const RegistryText = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const HeaderButton = styled(TouchableOpacity)<HeaderButtonProps>`
  ${({theme, lightBackground}) => css`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    justify-content: center;
    align-items: center;
    background-color: ${lightBackground
      ? theme.COLORS.GRAY_100
      : theme.COLORS.GRAY_300};
    margin: 0 10px 5px 10px;
  `}
`;

export const Header = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 12%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  justify-content: space-between;
  align-items: flex-end;
`;

export const MonthStatisticContainer = styled(
  TouchableOpacity,
)<MonthStatisticContainerProps>`
  ${({theme, isOpen}) => css`
    position: absolute;
    width: ${isOpen ? `${windowWidth - 20}px` : '40px'};
    border-radius: 10px;
    height: ${isOpen ? '25%' : '40px'};
    background-color: ${theme.COLORS.WHITE};
    bottom: 0;
    right: 0;
    margin: 0 10px 10px 10px;
  `}
`;

export const MonthStatisticsSection = styled.View`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const StatisticContainer = styled.View<StatisticContainerProps>`
  ${({theme, width, height, flexDirection}) => css`
    width: ${width ? `${width}%` : '100%'};
    height: ${height ? `${height}%` : '70%'};
    flex-direction: ${flexDirection ? flexDirection : 'row'};
    align-items: center;
    justify-content: flex-start;
  `}
`;

export const TitleContainer = styled.View<TitleContainerProps>`
  ${({
    theme,
    borderBottonWidth,
    backgroundColor,
    width,
    height,
    borderRadius,
  }) => css`
    width: ${width ? `${width}%` : '100%'};
    height: ${height ? `${height}%` : '30%'};
    ${borderBottonWidth && `border-bottom-width: ${borderBottonWidth}px`}
    border-color: ${theme.COLORS.GRAY_50};
    justify-content: center;
    align-items: center;
    background-color: ${backgroundColor ? backgroundColor : ''};
    flex-direction: row;
    gap: 10px;
    border-radius: ${borderRadius ? `${borderRadius}px` : '0'};
  `}
`;

export const Title = styled.Text<TitleProps>`
  ${({theme, weight, size, color}) => css`
    color: ${color ? color : theme.COLORS.WHITE};
    font-size: ${size ? size : theme.FONT_SIZE.LG}px;
    font-weight: ${weight ? weight : 500};
  `}
`;

export const UserIcon = styled(User).attrs(({theme}) => ({
  size: 26,
  color: theme.COLORS.GRAY_200,
  weight: 'fill',
}))``;

export const AddRegistryIcon = styled(Clock).attrs(({theme}) => ({
  size: 36,
  color: theme.COLORS.WHITE,
  weight: 'fill',
}))``;

export const StatisticIcon = styled(ChartLineUp).attrs(({theme, color}) => ({
  size: 26,
  color: color ? color : theme.COLORS.BLUE_200,
}))`
  margin: auto;
`;

export const UpChart = styled(TrendUp).attrs(({theme}) => ({
  size: 20,
  color: theme.COLORS.ACCEPTED,
}))``;

export const DownChart = styled(TrendDown).attrs(({theme}) => ({
  size: 20,
  color: theme.COLORS.ERROR,
}))``;

export const CalendarIcon = styled(Calendar).attrs(({theme}) => ({
  size: 46,
  color: theme.COLORS.WHITE,
}))``;
