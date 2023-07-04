import {Container, EmptyIcon, EmptyText} from './styles';

export const Empty = () => {
  return (
    <Container>
      <EmptyIcon />
      <EmptyText>There are no registries...</EmptyText>
    </Container>
  );
};
