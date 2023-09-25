import {useState} from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
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
  LocationContainer,
  LocationIcon,
  ModalContainer,
  ModalContent,
  UpdateIcon,
  TextContainer,
  TimeText,
  ActionButton,
  ActionButtonText,
  RequestTitle,
  RequestContainer,
} from './styles';
import {DatePickerProps, DatePickerTypeProps} from './interface';
import {DatePicker, Input} from '../';
import {useAdjustmentsRequests} from '../../hooks/useAdjustmentsRequests';
import {NavigationProps} from '../../routes/interface';
import {useRegistries} from '../../hooks/registries/useRegistries';
import {CurrentLocation} from '../CurrentLocation';

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
              addressLocation={addressLocation}
              registryType={registryType}
              registry={registry}
              isLoading={locationIsLoading}
            />
          ) : (
            <ModalContent height={50}>
              <CurrentLocation
                setLoading={setLocationIsLoading}
                setLocation={setAddressLocation}
              />
              <TextContainer>
                <TimeText>{hourAndMinutes}</TimeText>
              </TextContainer>
              <ButtonsContainer height={30}>
                <ActionButton
                  onPress={hideDatePicker}
                  backgroundColor={COLORS.GRAY_200}>
                  <ActionButtonText>Cancelar</ActionButtonText>
                </ActionButton>
                {hourAndMinutes && (
                  <ActionButton
                    onPress={() => {
                      if (locationIsLoading) {
                        return;
                      }
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
                    }}
                    backgroundColor={COLORS.BLUE_200}>
                    {createRegistry.isLoading || updateRegistry.isLoading ? (
                      <ActivityIndicator size="small" color={COLORS.WHITE} />
                    ) : (
                      <ActionButtonText>Adicionar</ActionButtonText>
                    )}
                  </ActionButton>
                )}
              </ButtonsContainer>
            </ModalContent>
          )}
        </ModalContainer>
      </Modal>
      <View>
        <ModalDatePickerButton
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
  isLoading,
  addressLocation,
  hideDatePicker,
  registryType,
  registry,
}: DatePickerTypeProps) => {
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
      type: 'info',
      text1: 'Ajuste solicitado!',
      text2: 'Agora é só aguardar uma avaliação',
    });
  };

  return (
    <ModalContent height={100}>
      <LocationContainer height={20}>
        <LocationIcon />
        {isLoading ? (
          <ActivityIndicator size="small" color={COLORS.WHITE} />
        ) : (
          <Text>{addressLocation}</Text>
        )}
      </LocationContainer>
      <RequestContainer>
        <RequestTitle>{`Solicitar ajuste em ${convertRegistryType(
          registryType,
        )?.toLocaleLowerCase()}`}</RequestTitle>
        <Controller
          name="reason"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              label=""
              onChangeText={onChange}
              value={value}
              errorMessage={errors.reason?.message}
              isTextArea={true}
              multiline={true}
              numberOfLines={4}
              placeholder="Digite o motivo do ajuste"
            />
          )}
        />
        <DatePicker
          hourAndMinutes={hourAndMinutes}
          setHourAndMinutes={setHourAndMinutes}
        />
      </RequestContainer>

      <ButtonsContainer height={10}>
        <ActionButton
          onPress={hideDatePicker}
          backgroundColor={COLORS.GRAY_200}>
          <ActionButtonText>Cancelar</ActionButtonText>
        </ActionButton>
        {hourAndMinutes && (
          <ActionButton
            onPress={handleSubmit(handleCreateAdjustment)}
            backgroundColor={COLORS.PENDING}>
            {creatingAdjustment ? (
              <ActivityIndicator size="small" color={COLORS.WHITE} />
            ) : (
              <ActionButtonText>Solicitar</ActionButtonText>
            )}
          </ActionButton>
        )}
      </ButtonsContainer>
    </ModalContent>
  );
};

export default ModalDatePicker;
