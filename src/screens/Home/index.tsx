import React from 'react';
import {AddRegistryButton, AddRegistryIcon, Container, Header} from './styles';
import {Registries} from './Registries';
import {getCurrentDate, monthMap} from '../../utils';
import {useNavigation} from '@react-navigation/native';

export const Home: React.FC = () => {
  const {navigate} = useNavigation();

  const getCurrentMonthAndYearDescription = () => {
    const currentMonthAndYear = getCurrentDate(true);

    const currentMonthAndYearSplited = currentMonthAndYear.split('-');

    const year = currentMonthAndYearSplited[1];

    const month = currentMonthAndYearSplited[0];

    const monthDescription = monthMap[month];

    return `${monthDescription} de ${year}`;
  };

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
