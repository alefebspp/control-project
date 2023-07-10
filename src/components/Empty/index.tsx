import {Container, EmptyIcon, EmptyText} from './styles';

export const Empty = () => {
  return (
    <Container>
      <EmptyIcon />
      <EmptyText>Não existem registros.</EmptyText>
    </Container>
  );
};
