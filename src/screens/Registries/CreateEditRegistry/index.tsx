import {useNavigation, useRoute} from '@react-navigation/native';
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
  DeleteIcon,
} from './styles';
import DatePicker from '../../../components/DatePicker';
import {Clock} from '../../../components/Clock';
import {Registry as RegistryInterface} from '../../../services/RegistriesRequests/interface';
import {
  getCurrentDate,
  formatRegistryTime,
  transformDateToString,
} from '../../../utils';
import {useReactQueryHook} from '../../../hooks/useReactQueryHook';
import {useQueryClient} from '@tanstack/react-query';
import {RouteProps} from '../../../routes/interface';

interface RegistryInputProps {
  registry: RegistryInterface | undefined;
  label: string;
  registryType: keyof Pick<
    RegistryInterface,
    'start' | 'end' | 'interval_start' | 'interval_end'
  >;
}

export const CreateEditRegistry: React.FC = () => {
  const {navigate} = useNavigation();

  const {params} = useRoute<RouteProps<'registry'>>();

  const currentDate = params.registryDate
    ? transformDateToString(params.registryDate)
    : getCurrentDate();

  const {useFindCollaboratorRegistries} = useReactQueryHook({});

  const {data: registry} = useFindCollaboratorRegistries('test', currentDate);

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
        <Clock registryDate={registry?.date} />
        <RegistryInput
          registryType="start"
          registry={registry}
          label="Entrada"
        />
        <RegistryInput
          registryType="interval_start"
          registry={registry}
          label="Início intervalo"
        />
        <RegistryInput
          registryType="interval_end"
          registry={registry}
          label="Fim intervalo"
        />
        <RegistryInput registryType="end" registry={registry} label="Saída" />
      </ContentContainer>
    </Container>
  );
};

const RegistryInput = ({registry, label, registryType}: RegistryInputProps) => {
  const queryClient = useQueryClient();

  const {useUpdateRegistryMutation} = useReactQueryHook({queryClient});

  const {mutateAsync: updateRegistry} = useUpdateRegistryMutation();

  const handleEraseRegistry = async (type: string, newValue: null) => {
    if (registry || registry == null) {
      await updateRegistry({
        registryId: registry?.id,
        registryData: {
          [type]: newValue,
          [`${type}_location`]: newValue,
        },
      });
    }
  };

  return (
    <InputContainer>
      <RegistryContainer>
        <Registry>
          <RegistryTypeLabel>{label}</RegistryTypeLabel>
          <DateText>
            {registry?.[registryType]
              ? formatRegistryTime(registry[registryType]?.toString())
              : '--'}
          </DateText>
        </Registry>
      </RegistryContainer>
      {registry?.[registryType] ? (
        <ActionsContainer>
          <IconButton
            onPress={() => handleEraseRegistry(registryType, null)}
            width={50}
            height={50}>
            <DeleteIcon />
          </IconButton>
          <DatePicker registry={registry} registryType={registryType} />
        </ActionsContainer>
      ) : (
        <DatePicker registry={registry} registryType={registryType} />
      )}
    </InputContainer>
  );
};
