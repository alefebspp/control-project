import React, {useState} from 'react';
import {
  Container,
  Header,
  Logo,
  BackButton,
  BackIcon,
  RegistriesContainer,
  Registry,
  RegistryText,
} from './styles';
import logo from '../../assets/clock.jpg';
import {FlatList} from 'react-native';

interface Registry {
  date: string;
  hour: string;
  id: string;
}

export const Home: React.FC = () => {
  const fakeRegistries = [
    {
      id: '1',
      date: '11/05',
      hour: '11:56',
    },
    {
      id: '2',
      date: '12/05',
      hour: '12:00',
    },
  ];

  const [registries, setRegistries] = useState<Registry[]>(fakeRegistries);

  return (
    <Container>
      <Header>
        <BackButton>
          <BackIcon />
        </BackButton>
        <Logo source={logo} />
      </Header>
      <RegistriesContainer>
        <FlatList
          renderItem={({item}) => (
            <Registry>
              <RegistryText>{item.date}</RegistryText>
              <RegistryText>{item.hour}</RegistryText>
            </Registry>
          )}
          data={fakeRegistries}
          keyExtractor={item => item.id}
        />
      </RegistriesContainer>
    </Container>
  );
};
