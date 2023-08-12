import React from 'react';
import {Avatar} from '../../components';
import {
  HeaderButton,
  AddRegistryIcon,
  Container,
  Header,
  UserIcon,
} from './styles';
import {Registries} from './Registries';
import {getCurrentMonthAndYearDescription} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../routes/interface';

export const Home: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const currentMonthAndYearDescription = getCurrentMonthAndYearDescription();

  return (
    <Container>
      <Header>
        <Avatar headerAvatar size={36} />
        <HeaderButton
          onPress={() => navigate('registry', {registryDate: undefined})}>
          <AddRegistryIcon />
        </HeaderButton>
      </Header>
      <Registries
        currentMonthAndYearDescription={currentMonthAndYearDescription}
      />
    </Container>
  );
};
