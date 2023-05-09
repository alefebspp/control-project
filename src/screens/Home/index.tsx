import React from 'react';
import {Container, Header, Logo, BackButton, BackIcon} from './styles';
import logo from '../../assets/clock.jpg';

export const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <BackButton>
          <BackIcon />
        </BackButton>
        <Logo source={logo} />
      </Header>
    </Container>
  );
};
