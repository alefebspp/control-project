import styled, {css} from 'styled-components/native';
import {ListPlus, BarChart, Plus, Minus} from 'lucide-react-native';

interface SectionProps {
  alignItems?: string;
}

interface TitleProps {
  hourText?: boolean;
  weight?: number;
}

export const Wrapper = styled.ImageBackground`
  margin: 20px 0;
  width: 100%;
  height: 150px;
  border-radius: 20px;
`;

export const Container = styled.View`
  width: 100%;
  height: 50%;
  flex-direction: row;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

export const Section = styled.View<SectionProps>`
  ${({theme, alignItems}) => css`
    width: 50%;
    height: 100%;
    border-radius: 10px;
    padding: 10px;
    align-items: ${alignItems ?? 'flex-start'};
  `}
`;

export const Title = styled.Text<TitleProps>`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: ${({theme, hourText}) => (hourText ? 30 : theme.FONT_SIZE.MD)}px;
  font-weight: ${({weight}) => weight ?? 500};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: ${({theme}) => theme.FONT_SIZE.XS}px;
`;

export const ChartIcon = styled(BarChart).attrs(({theme}) => ({
  size: 20,
  color: theme.COLORS.WHITE,
}))``;

export const PlusIcon = styled(Plus).attrs(({theme, size}) => ({
  size: size ?? 25,
  color: theme.COLORS.ACCEPTED,
}))``;

export const MinusIcon = styled(Minus).attrs(({theme, size}) => ({
  size: size ?? 25,
  color: theme.COLORS.ERROR,
}))``;

export const TotalIcon = styled(ListPlus).attrs(({theme}) => ({
  size: 20,
  color: theme.COLORS.WHITE,
}))``;
