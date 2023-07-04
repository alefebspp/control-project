import {useEffect, useState} from 'react';
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
  ActionsContainer,
  UpdateIcon,
} from './styles';
import {ModalDatePicker, Clock} from '../../../components';
import {
  getCurrentDate,
  formatRegistryTime,
  transformDateToString,
} from '../../../utils';
import {useRegistriesRequests} from '../../../hooks/useRegistriesRequests';
import {useAuthContext} from '../../../hooks/useAuth';
import {RouteProps, RegistryInputProps} from './interface';
import {findAdjustmentByRegistryIdRequest} from '../../../services/AdjustmentsRequests';

export const CreateEditRegistry: React.FC = () => {
  const {navigate} = useNavigation();

  const {user} = useAuthContext();

  const {params} = useRoute<RouteProps<'registry'>>();

  const currentDate = params?.registryDate
    ? transformDateToString(params?.registryDate)
    : getCurrentDate();

  const {useFindCollaboratorRegistries} = useRegistriesRequests({});

  const {data: registry} = useFindCollaboratorRegistries(
    user?.user_id,
    currentDate,
  );

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
      <ContentContainer>
        <Clock registryDate={registry ? registry[0]?.date : undefined} />
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

  console.log(adjustmentExists);

  const showAdjustmentExistsToast = () => {
    Toast.show({
      type: 'info',
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
        <Registry>
          <RegistryTypeLabel>{label}</RegistryTypeLabel>
          <DateText>
            {registryTypeAlreadyExists
              ? formatRegistryTime(registry[registryType]?.toString())
              : '--'}
          </DateText>
        </Registry>
      </RegistryContainer>
      {adjustmentExists ? (
        <IconButton onPress={showAdjustmentExistsToast} width={50} height={50}>
          <UpdateIcon />
        </IconButton>
      ) : registryTypeAlreadyExists ? (
        <ActionsContainer>
          <ModalDatePicker registry={registry} registryType={registryType} />
        </ActionsContainer>
      ) : (
        <ModalDatePicker registry={registry} registryType={registryType} />
      )}
    </InputContainer>
  );
};
