import {X} from 'lucide-react-native';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface ContainerContentProps {
  height: number;
}

interface TextStyleProps {
  color?: string;
  size?: number;
  weight?: number;
}

export const ModalContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View<ContainerContentProps>`
  width: 100%;
  height: ${({height}) => height}%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 10px 0;
`;

export const ModalHeader = styled.View`
  width: 100%;
  height: 80px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_100};
  padding: 0 15px;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const Text = styled.Text<TextStyleProps>`
  font-size: ${({theme, size}) => (size ? size : theme.FONT_SIZE.SM)}px;
  color: ${({theme, color}) => (color ? color : theme.COLORS.WHITE)};
  font-weight: ${({weight}) => (weight ? weight : 400)};
  text-align: center;
`;

export const CloseButton = styled(TouchableOpacity)`
  width: 36px;
  height: 36px;
  background-color: ${({theme}) => theme.COLORS.GRAY_50};
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-left: auto;
`;

export const CloseIcon = styled(X).attrs(({theme}) => ({
  size: 26,
  color: theme.COLORS.GRAY_200,
}))``;
