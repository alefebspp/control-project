import {EmptyProps} from './interface';
import {Container, EmptyIcon, EmptyText} from './styles';

export const Empty = ({dataName}: EmptyProps) => {
  return (
    <Container>
      <EmptyIcon />
      <EmptyText>
        Não existem{' '}
        {<EmptyText highlight>{dataName.toLocaleUpperCase()}</EmptyText>} nesse
        período.
      </EmptyText>
    </Container>
  );
};
