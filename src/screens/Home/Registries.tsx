import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuthContext} from '../../hooks/useAuth';
import {
  RegistriesContainer,
  Registry,
  RegistryText,
  RegistryTextContainer,
} from './styles';
import {useRegistriesRequests} from '../../hooks/useRegistriesRequests';
import {formatDateToDayMonth, formatRegistryTime} from '../../utils';
import {Empty} from '../../components';
import {Registry as RegistryInterface} from '../../services/RegistriesRequests/interface';
import {PageProps} from './interface';
import {useRefetchOnFocus} from '../../hooks/useRefetchOnFocus';
import {RegistriesShimmer} from './shimmer';

export const Registries = ({period}: PageProps) => {
  const {user} = useAuthContext();

  const {navigate} = useNavigation();

  const {find} = useRegistriesRequests();

  const cacheResponse = false;

  const {
    data: registries,
    isLoading,
    refetch,
    isEmpty,
  } = find(user?.user_id, undefined, period, cacheResponse);


  useRefetchOnFocus(refetch);

  return (
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
      {isEmpty ? (
        <Empty dataName="registros" />
      ) : isLoading ? (
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
  );
};
