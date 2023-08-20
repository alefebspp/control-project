import {useState} from 'react';
import {ScrollView} from 'react-native';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useAuthContext} from '../../hooks/useAuth';
import {
  RegistriesContainer,
  Registry,
  RegistryText,
  RegistryTextContainer,
  PageContainer,
  MonthStatisticContainer,
  StatisticIcon,
  MonthStatisticsSection,
  TitleContainer,
  Title,
  StatisticContainer,
  UpChart,
  DownChart,
} from './styles';
import {useRegistriesRequests} from '../../hooks/useRegistriesRequests';
import {
  formatDateToDayMonth,
  formatRegistryTime,
  getMonthAndYearDescription,
} from '../../utils';
import {Empty, Select} from '../../components';
import {Registry as RegistryInterface} from '../../services/RegistriesRequests/interface';
import {PageProps} from './interface';
import {RegistriesShimmer, StatisticShimmer} from './shimmer';

export const Registries = ({currentMonthAndYearDescription}: PageProps) => {
  const currentDate = new Date();

  const [showStatisctics, setShowStatistics] = useState<boolean>(false);

  const [period, setPeriod] = useState<string | undefined>(
    `${currentDate.getFullYear()}-0${currentDate.getMonth() + 1}-01`,
  );

  const {user} = useAuthContext();

  const {navigate} = useNavigation();

  const {useFindCollaboratorRegistries, useCalculateRegistriesHours} =
    useRegistriesRequests({});

  const {data: registries, isLoading: registriesIsLoading} =
    useFindCollaboratorRegistries(user?.user_id, undefined, period);

  const {data: statistics, isLoading: statisticsIsLoading} =
    useCalculateRegistriesHours(period, user?.user_id);

  const emptyRegistriesData = registries?.length == 0;

  const {COLORS} = useTheme();

  return (
    <PageContainer>
      <Select
        setPeriod={setPeriod}
        currentMonthDescription={currentMonthAndYearDescription}
      />
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

        {emptyRegistriesData ? (
          <Empty dataName="registros" />
        ) : registriesIsLoading ? (
          <RegistriesShimmer />
        ) : (
          <ScrollView showsHorizontalScrollIndicator={false}>
            {registries?.map((registry: RegistryInterface) => {
              return (
                <Registry
                  onPress={() =>
                    navigate('registry', {registryDate: registry?.date})
                  }
                  key={registry?.id}>
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
          </ScrollView>
        )}
      </RegistriesContainer>
      <MonthStatisticContainer
        onPress={() => setShowStatistics(!showStatisctics)}
        isOpen={showStatisctics}>
        {!showStatisctics ? (
          <StatisticIcon />
        ) : (
          <MonthStatisticsSection>
            <TitleContainer borderBottonWidth={2}>
              <Title weight={400} color={COLORS.GRAY_200}>
                Estatísticas - {statistics?.monthLabel}
              </Title>
            </TitleContainer>
            <StatisticContainer>
              <StatisticContainer
                flexDirection="column"
                height={100}
                width={50}>
                <TitleContainer>
                  <UpChart />
                  <Title color={COLORS.GRAY_200} weight={300}>
                    Adicional
                  </Title>
                </TitleContainer>
                {statisticsIsLoading ? (
                  <StatisticShimmer />
                ) : (
                  <TitleContainer
                    height={50}
                    width={70}
                    borderRadius={15}
                    backgroundColor={COLORS.ACCEPTED}>
                    <Title weight={300} size={30}>
                      {statistics?.aditionalHours.label}
                    </Title>
                  </TitleContainer>
                )}
              </StatisticContainer>
              <StatisticContainer
                flexDirection="column"
                height={100}
                width={50}>
                <TitleContainer>
                  <DownChart />
                  <Title color={COLORS.GRAY_200} weight={300}>
                    Pendente
                  </Title>
                </TitleContainer>
                {statisticsIsLoading ? (
                  <StatisticShimmer />
                ) : (
                  <TitleContainer
                    borderRadius={15}
                    height={50}
                    width={70}
                    backgroundColor={COLORS.ERROR}>
                    <Title weight={300} size={30}>
                      {statistics?.pendingHours.label}
                    </Title>
                  </TitleContainer>
                )}
              </StatisticContainer>
            </StatisticContainer>
          </MonthStatisticsSection>
        )}
      </MonthStatisticContainer>
    </PageContainer>
  );
};
