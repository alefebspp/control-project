import {MapPin} from 'lucide-react-native';
import styled from 'styled-components/native';

interface ContainerContentProps {
  height: number;
}

export const Text = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XS}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
  text-align: center;
`;

export const LocationContainer = styled.View<ContainerContentProps>`
  flex-direction: column;
  width: 100%;
  gap: 5px;
  justify-content: center;
  align-items: center;
  height: ${({height}) => height}%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0 10px 10px 10px;
  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const LocationIcon = styled(MapPin).attrs(({theme}) => ({
  size: 30,
  color: theme.COLORS.GRAY_200,
}))``;
