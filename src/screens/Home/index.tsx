import React, {useState} from 'react';
import {Avatar, Select} from '../../components';
import {
  HeaderButton,
  AddRegistryIcon,
  Container,
  Header,
  PageContainer,
} from './styles';
import {Registries} from './Registries';
import {getCurrentMonthAndYearDescription} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../routes/interface';
import {HoursBalance} from '../../components/HoursBalance';

export const Home: React.FC = () => {
  const currentDate = new Date();
  const [period, setPeriod] = useState<string>(
    `${currentDate.getFullYear()}-0${currentDate.getMonth() + 1}-01`,
  );
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
      <PageContainer>
        <Select
          setPeriod={setPeriod}
          currentMonthDescription={currentMonthAndYearDescription}
        />
        <HoursBalance period={period} />
        <Registries period={period} />
      </PageContainer>
    </Container>
  );
};
