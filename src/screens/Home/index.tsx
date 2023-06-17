import React, {useEffect, useState} from 'react';
import {
  Container,
  Header,
  RegistriesContainer,
  Registry,
  RegistryText,
  RegistryTextContainer,
  TitleContainer,
  TitleSection,
  CalendarIcon,
  Title,
} from './styles';
import {
  formatDateToDayMonth,
  formatRegistryTime,
  getCurrentDate,
  monthMap,
} from '../../utils';
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

  const [titleDescription, setTitleDescription] = useState<string>();

  const {data: registries} = listRegistries();

  const {navigate} = useNavigation<NavigationProps>();

  const getCurrentMonthAndYearDescription = () => {
    const currentMonthAndYear = getCurrentDate(true);

    const currentMonthAndYearSplited = currentMonthAndYear.split('-');

    const year = currentMonthAndYearSplited[1];

    const month = currentMonthAndYearSplited[0];

    const monthDescription = monthMap[month];

    return `${monthDescription} de ${year}`;
  };

  useEffect(() => {
    const titleDescription = getCurrentMonthAndYearDescription();
    setTitleDescription(titleDescription);
  }, []);

  return (
    <Container>
      <Header></Header>
      <TitleContainer>
        <TitleSection>
          <CalendarIcon />
          <Title>{titleDescription}</Title>
        </TitleSection>
      </TitleContainer>
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
