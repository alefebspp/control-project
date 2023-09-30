import {MapPin} from 'lucide-react-native';
import styled from 'styled-components/native';

interface TextStyleProps {
  color?: string;
  size?: number;
  weight?: number;
}

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.Text<TextStyleProps>`
  font-size: ${({theme, size}) => size ?? theme.FONT_SIZE.XS}px;
  color: ${({theme, color}) => color ?? theme.COLORS.GRAY_200};
  font-weight: ${({weight}) => weight ?? 400};
  text-align: center;
`;

export const LocationContainer = styled.View`
  flex-direction: column;
  width: 100%;
  gap: 5px;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100px;
  padding: 15px;
  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const LocationIcon = styled(MapPin).attrs(({theme}) => ({
  size: 28,
  color: theme.COLORS.BLUE_300,
}))``;
