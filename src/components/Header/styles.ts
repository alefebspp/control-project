import {TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled, {css} from 'styled-components/native';

interface SectionProps {
  active: boolean;
}

export const Container = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 12%;
  background-color: ${({theme}) => theme.COLORS.GRAY_50};
  justify-content: center;
  align-items: flex-end;
`;

export const SectionsContainer = styled.View`
  width: 80%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Section = styled.TouchableOpacity<SectionProps>`
  width: 40%;
  height: 100%;
  border-bottom-width: 3px;
  justify-content: flex-end;
  align-items: center;
  border-color: ${({theme, active}) =>
    active ? theme.COLORS.BLUE_300 : theme.COLORS.GRAY_200};
`;

export const SectionText = styled.Text<SectionProps>`
  ${({theme, active}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${active ? theme.COLORS.BLUE_300 : theme.COLORS.GRAY_200};
    font-weight: 500;
  `}
`;
