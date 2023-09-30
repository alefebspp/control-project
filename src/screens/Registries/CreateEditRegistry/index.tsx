import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {
  Container,
  Header,
  IconButton,
  BackIcon,
  ContentContainer,
  InputContainer,
  RegistryContainer,
  RegistryTypeLabel,
  DateText,
  Registry,
  UpdateIcon,
} from './styles';
import {ModalDatePicker, Locations, Clock} from '../../../components';
import {
  getCurrentDate,
  formatRegistryTime,
  transformDateToString,
} from '../../../utils';
import {useRegistriesRequests} from '../../../hooks/requests/useRegistriesRequests';
import {useAuthContext} from '../../../hooks/useAuth';
import {RouteProps, RegistryInputProps} from './interface';
import {findAdjustmentByRegistryIdRequest} from '../../../services/AdjustmentsRequests';
import {RegistryShimmer} from './shimmer';

export const CreateEditRegistry: React.FC = () => {
  const {navigate} = useNavigation();

  const {user} = useAuthContext();

  const {params} = useRoute<RouteProps<'registry'>>();

  const currentDate = params?.registryDate
    ? transformDateToString(params?.registryDate)
    : getCurrentDate();

  const {find} = useRegistriesRequests();

  const {data: registry, isLoading} = find(user?.user_id, currentDate);

  const handleGoBack = () => {
    navigate('home');
  };

  return (
    <Container>
      <Header>
        <IconButton width={40} height={40} onPress={handleGoBack}>
          <BackIcon />
        </IconButton>
      </Header>
      {isLoading ? (
        <RegistryShimmer />
      ) : (
        <>
          <Clock registryDate={registry ? registry[0]?.date : undefined} />
          <ContentContainer>
            <RegistryInput
              registryType="start"
              registry={registry ? registry[0] : undefined}
              label="Entrada"
            />
            <RegistryInput
              registryType="interval_start"
              registry={registry ? registry[0] : undefined}
              label="Início intervalo"
            />
            <RegistryInput
              registryType="interval_end"
              registry={registry ? registry[0] : undefined}
              label="Fim intervalo"
            />
            <RegistryInput
              registryType="end"
              registry={registry ? registry[0] : undefined}
              label="Saída"
            />
          </ContentContainer>
        </>
      )}
      <Locations
        registry={registry ? registry[0] : undefined}
        isLoading={isLoading}
      />
    </Container>
  );
};

const RegistryInput = ({registry, label, registryType}: RegistryInputProps) => {
  const registryTypeAlreadyExists = registry?.[registryType];

  const [adjustmentExists, setAdjustmentExists] = useState<
    boolean | undefined
  >();

  const checkIfAdjustmentExists = async () => {
    const adjustmentExists = await findAdjustmentByRegistryIdRequest({
      registryId: registry?.id,
      registryType,
    });

    setAdjustmentExists(adjustmentExists);
  };

  const showAdjustmentExistsToast = () => {
    Toast.show({
      type: 'warning',
      text1: 'Registro Pendente',
      text2: 'Já foi requisitado um ajuste para esse registro',
    });
  };

  useEffect(() => {
    checkIfAdjustmentExists();
  }, [registry, registryType]);

  return (
    <InputContainer>
      <RegistryContainer>
        <Registry style={styles.box}>
          <RegistryTypeLabel>{label}</RegistryTypeLabel>
          <DateText>
            {registryTypeAlreadyExists
              ? formatRegistryTime(registry[registryType]?.toString())
              : '--'}
          </DateText>
        </Registry>
      </RegistryContainer>
      {adjustmentExists ? (
        <IconButton
          style={styles.box}
          onPress={showAdjustmentExistsToast}
          width={50}
          height={50}>
          <UpdateIcon />
        </IconButton>
      ) : registryTypeAlreadyExists ? (
        <ModalDatePicker registry={registry} registryType={registryType} />
      ) : (
        <ModalDatePicker registry={registry} registryType={registryType} />
      )}
    </InputContainer>
  );
};

const styles = StyleSheet.create({
  box: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
});
