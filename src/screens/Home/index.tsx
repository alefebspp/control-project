import React from 'react';
import {AddRegistryButton, AddRegistryIcon, Container, Header} from './styles';
import {Registries} from './Registries';
import {getCurrentMonthAndYearDescription} from '../../utils';
import {useNavigation} from '@react-navigation/native';

export const Home: React.FC = () => {
  const {navigate} = useNavigation();

  const currentMonthAndYearDescription = getCurrentMonthAndYearDescription();

  return (
    <Container>
      <Header>
        <AddRegistryButton
          onPress={() => navigate('registry', {registryDate: undefined})}>
          <AddRegistryIcon />
        </AddRegistryButton>
      </Header>
      <Registries
        currentMonthAndYearDescription={currentMonthAndYearDescription}
      />
    </Container>
  );
};
