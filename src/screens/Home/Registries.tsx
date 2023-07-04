import {useNavigation} from '@react-navigation/native';
import {useAuthContext} from '../../hooks/useAuth';
import {
  RegistriesContainer,
  Registry,
  RegistryText,
  RegistryTextContainer,
  TitleContainer,
  TitleSection,
  CalendarIcon,
  Title,
  PageContainer,
} from './styles';
import {useRegistriesRequests} from '../../hooks/useRegistriesRequests';
import {formatDateToDayMonth, formatRegistryTime} from '../../utils';
import {Empty} from '../../components';
import {Registry as RegistryInterface} from '../../services/RegistriesRequests/interface';
import {PageProps} from './interface';
import {RegistriesShimmer} from './shimmer';

export const Registries = ({currentMonthAndYearDescription}: PageProps) => {
  const {user} = useAuthContext();

  const {navigate} = useNavigation();

  const {useFindCollaboratorRegistries} = useRegistriesRequests({});

  const {data: registries, isLoading} = useFindCollaboratorRegistries(
    user?.user_id,
    undefined,
  );

  const isRegistriesDataEmpty = registries?.length == 0;

  return (
    <PageContainer>
      <TitleContainer>
        <TitleSection>
          <CalendarIcon />
          <Title>{currentMonthAndYearDescription}</Title>
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

        {isRegistriesDataEmpty ? (
          <Empty />
        ) : isLoading ? (
          <RegistriesShimmer />
        ) : (
          registries?.map((registry: RegistryInterface) => {
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
          })
        )}
      </RegistriesContainer>
    </PageContainer>
  );
};
