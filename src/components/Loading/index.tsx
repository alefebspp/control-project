import {useTheme} from 'styled-components';
import {Container} from './styles';
import {ActivityIndicator} from 'react-native';

export const Loading = () => {
  const {COLORS} = useTheme();

  return (
    <Container>
      <ActivityIndicator size="large" color={COLORS.BLUE_300} />
    </Container>
  );
};
