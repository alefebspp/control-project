import {MapPin, MapPinLine} from 'phosphor-react-native';
import styled, {css} from 'styled-components/native';

interface LocationsContainerProps {
  height?: number;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  padding?: number;
  backgroundColor?: string;
  applyTopBorder?: boolean;
}

interface LocationLabelProps {
  fontSize?: number;
  fontWeight?: number;
  wrapText?: boolean;
}

export const LocationsContainer = styled.View<LocationsContainerProps>`
  ${({
    theme,
    height,
    justifyContent,
    alignItems,
    flexDirection,
    padding,
    backgroundColor,
    applyTopBorder,
  }) => css`
    width: 100%;
    height: ${height ? `${height}%` : 'auto'};
    background-color: ${backgroundColor ? backgroundColor : theme.COLORS.WHITE};
    justify-content: ${justifyContent ? justifyContent : 'flex-start'};
    align-items: ${alignItems ? alignItems : 'flex-start'};
    border-top-width: ${applyTopBorder ? '1px' : 0};
    border-top-color: ${({theme}) => theme.COLORS.GRAY_100};
    flex-direction: ${flexDirection ? flexDirection : 'column'};
    padding: ${padding ? `${padding}px` : '0'};
    gap: 10px;
  `}
`;

export const LocationLabel = styled.Text<LocationLabelProps>`
  ${({theme, fontSize, fontWeight, wrapText}) => css`
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    color: ${theme.COLORS.GRAY_300};
    flex-wrap: ${wrapText ? 'wrap' : 'nowrap'};
    flex-shrink: ${wrapText ? 1 : 0};
  `}
`;

export const PrimaryLocationIcon = styled(MapPinLine).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.GRAY_300,
}))``;

export const SecondaryLocationIcon = styled(MapPin).attrs(({theme}) => ({
  size: 18,
  color: theme.COLORS.GRAY_300,
}))``;
