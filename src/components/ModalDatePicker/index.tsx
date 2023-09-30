import {useState} from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';
import {useTheme} from 'styled-components';
import {useQueryClient} from '@tanstack/react-query';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {
  getHourMinutesFormated,
  requestSchema,
  checkIfCurrentDateEqualsRegistryDate,
  convertRegistryType,
} from '../../utils';
import {
  ButtonsContainer,
  ModalDatePickerButton,
  DatePickerIcon,
  Text,
  ModalContainer,
  ModalContent,
  UpdateIcon,
  TimeText,
  RequestContainer,
  ModalHeader,
  CalendarIcon,
  CloseButton,
  CloseIcon,
  PencilIcon,
  InputContainer,
  MessageIcon,
} from './styles';
import {DatePickerProps, DatePickerTypeProps} from './interface';
import {Clock, DatePicker, Input} from '../';
import {useAdjustmentsRequests} from '../../hooks/requests/useAdjustmentsRequests';
import {NavigationProps} from '../../routes/interface';
import {useRegistries} from '../../hooks/registries/useRegistries';
import {CurrentLocation} from '../CurrentLocation';
import {Button} from '../Button';

interface FormDataProps {
  reason: string;
}

export const ModalDatePicker = ({registryType, registry}: DatePickerProps) => {
  const [addressLocation, setAddressLocation] = useState<string | undefined>();
  const [locationIsLoading, setLocationIsLoading] = useState<boolean>(false);
  const [hourAndMinutes, setHourAndMinutes] = useState<string | undefined>();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const {COLORS} = useTheme();
  const {createRegistry, updateRegistry} = useRegistries();

  const handleUpdateOrCreateRegistry = () => {
    if (registry) {
      updateRegistry.execute({
        time: hourAndMinutes,
        location: addressLocation,
        registryType,
        registryId: registry.id,
        closeModalFunction: hideDatePicker,
      });
      return;
    }
    createRegistry.execute({
      time: hourAndMinutes,
      location: addressLocation,
      registryType,
      closeModalFunction: hideDatePicker,
    });
  };

  const registryTypeAlreadyExists = registry?.[registryType];
  const currentDateEqualsRegistryDate = checkIfCurrentDateEqualsRegistryDate(
    registry?.date,
  );

  const showDatePicker = async () => {
    setDatePickerVisibility(true);
    const currentHourAndMinutes = getHourMinutesFormated(new Date());
    !registryTypeAlreadyExists && setHourAndMinutes(currentHourAndMinutes);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setHourAndMinutes(undefined);
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isDatePickerVisible}
        onRequestClose={() => {
          hideDatePicker();
        }}>
        <ModalContainer>
          {registryTypeAlreadyExists || !currentDateEqualsRegistryDate ? (
            <CreateAdjustment
              hideDatePicker={hideDatePicker}
              registryType={registryType}
              registry={registry}
            />
          ) : (
            <ModalContent height={50}>
              <ModalHeader>
                <CalendarIcon />
                <Text size={20} weight={500} color={COLORS.BLUE_400}>
                  Novo registro
                </Text>
                <CloseButton onPress={hideDatePicker}>
                  <CloseIcon strokeWidth={1.5} />
                </CloseButton>
              </ModalHeader>
              <CurrentLocation
                setLoading={setLocationIsLoading}
                setLocation={setAddressLocation}
              />

              <TimeText>{hourAndMinutes}</TimeText>

              <ButtonsContainer height={30}>
                {!locationIsLoading && (
                  <Button
                    isLoading={
                      createRegistry.isLoading || updateRegistry.isLoading
                    }
                    type="SECONDARY"
                    onPress={handleUpdateOrCreateRegistry}>
                    Adicionar
                  </Button>
                )}
              </ButtonsContainer>
            </ModalContent>
          )}
        </ModalContainer>
      </Modal>
      <View>
        <ModalDatePickerButton
          style={styles.box}
          backgroundColor={COLORS.WHITE}
          onPress={showDatePicker}>
          {registryTypeAlreadyExists || !currentDateEqualsRegistryDate ? (
            <UpdateIcon />
          ) : (
            <DatePickerIcon />
          )}
        </ModalDatePickerButton>
      </View>
    </>
  );
};

const CreateAdjustment = ({
  hideDatePicker,
  registryType,
  registry,
}: DatePickerTypeProps) => {
  const [addressLocation, setAddressLocation] = useState<string | undefined>();
  const [locationIsLoading, setLocationIsLoading] = useState<boolean>(false);
  const [hourAndMinutes, setHourAndMinutes] = useState<string | undefined>();

  const {COLORS} = useTheme();

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormDataProps>({
    resolver: yupResolver(requestSchema),
  });

  const {navigate} = useNavigation<NavigationProps>();

  const queryClient = useQueryClient();

  const {useCreateAdjustmentRequest} = useAdjustmentsRequests({queryClient});

  const {mutateAsync: createAdjustment, isLoading: creatingAdjustment} =
    useCreateAdjustmentRequest();

  const handleCreateAdjustment = async ({reason}: FormDataProps) => {
    await createAdjustment({
      registry_id: registry?.id,
      reason: reason,
      registry_location: registry?.[`${registryType}_location`],
      new_location: addressLocation,
      registry_type: registryType,
      collaborator_id: registry?.collaborator_id,
      new_value: hourAndMinutes,
      previous_value: registry?.[registryType],
      company_id: registry?.company_id,
    });
    hideDatePicker();
    navigate('adjustments');
    Toast.show({
      type: 'success',
      text1: 'Ajuste solicitado!',
      text2: 'Agora é só aguardar uma avaliação',
    });
  };

  return (
    <ModalContent height={100}>
      <ModalHeader>
        <PencilIcon />
        <Text size={20} weight={500} color={COLORS.BLUE_400}>
          Solicitar ajuste
        </Text>
        <CloseButton onPress={hideDatePicker}>
          <CloseIcon strokeWidth={1.5} />
        </CloseButton>
      </ModalHeader>
      <CurrentLocation
        setLocation={setAddressLocation}
        setLoading={setLocationIsLoading}
      />
      <Clock
        adjustmentInfo={{
          previousHour: registry?.[registryType],
          registryType: convertRegistryType(registryType),
        }}
        registryDate={registry?.date}
      />
      <RequestContainer>
        <Controller
          name="reason"
          control={control}
          render={({field: {onChange, value}}) => (
            <InputContainer>
              <Input
                label="Motivo do ajuste"
                labelIcon={<MessageIcon />}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.reason?.message}
                isTextArea={true}
                multiline={true}
                numberOfLines={5}
                placeholder="Digite o motivo do ajuste"
              />
            </InputContainer>
          )}
        />
        <DatePicker
          hourAndMinutes={hourAndMinutes}
          setHourAndMinutes={setHourAndMinutes}
        />
        {hourAndMinutes && (
          <ButtonsContainer height={10}>
            <Button
              canHide
              isLoading={creatingAdjustment}
              type="SECONDARY"
              onPress={handleSubmit(handleCreateAdjustment)}>
              Solicitar
            </Button>
          </ButtonsContainer>
        )}
      </RequestContainer>
    </ModalContent>
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

export default ModalDatePicker;
