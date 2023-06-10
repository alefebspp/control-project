import React from 'react';
import {
  Container,
  Header,
  BackButton,
  BackIcon,
  RegistriesContainer,
  Registry,
  RegistryText,
  RegistryTextContainer,
  AddRegistryButton,
  AddRegistryIcon,
} from './styles';
import {formatDateToDayMonth, formatRegistryTime} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {useReactQueryHook} from '../../hooks/useReactQueryHook';
import {Registry as RegistryInterface} from '../../services/RegistriesRequests/interface';
import {NavigationProps} from '../../routes/interface';

interface Registry {
  date: string;
  start: string;
  end: string;
  interval_start: string;
  interval_end: string;
  id: string;
}

export const Home: React.FC = () => {
  const {listRegistries} = useReactQueryHook({});

  const {data: registries} = listRegistries();

  const {navigate, goBack} = useNavigation<NavigationProps>();

  const handleGoBack = () => {
    goBack();
  };

  const handleNavigate = () => {
    navigate('registry', {});
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
        <AddRegistryButton onPress={handleNavigate}>
          <AddRegistryIcon />
        </AddRegistryButton>
      </Header>
      <RegistriesContainer>
        <Registry>
          <RegistryTextContainer>
            <RegistryText>Data</RegistryText>
          </RegistryTextContainer>

          <RegistryTextContainer>
            <RegistryText>Entrada</RegistryText>
          </RegistryTextContainer>

          <RegistryTextContainer>
            <RegistryText>I.Interv.</RegistryText>
          </RegistryTextContainer>

          <RegistryTextContainer>
            <RegistryText>F.Interv.</RegistryText>
          </RegistryTextContainer>

          <RegistryTextContainer>
            <RegistryText>Saída</RegistryText>
          </RegistryTextContainer>
        </Registry>
        {registries?.map((registry: RegistryInterface) => {
          return (
            <Registry
              onPress={() =>
                navigate('registry', {registryDate: registry.date})
              }
              key={registry.id}>
              <RegistryTextContainer>
                <RegistryText>
                  {formatDateToDayMonth(registry?.date)}
                </RegistryText>
              </RegistryTextContainer>
              <RegistryTextContainer>
                <RegistryText>
                  {formatRegistryTime(registry?.start) ?? '--'}
                </RegistryText>
              </RegistryTextContainer>

              <RegistryTextContainer>
                <RegistryText>
                  {formatRegistryTime(registry?.interval_start) ?? '--'}
                </RegistryText>
              </RegistryTextContainer>

              <RegistryTextContainer>
                <RegistryText>
                  {formatRegistryTime(registry?.interval_end) ?? '--'}
                </RegistryText>
              </RegistryTextContainer>

              <RegistryTextContainer>
                <RegistryText>
                  {formatRegistryTime(registry?.end) ?? '--'}
                </RegistryText>
              </RegistryTextContainer>
            </Registry>
          );
        })}
      </RegistriesContainer>
    </Container>
  );
};
