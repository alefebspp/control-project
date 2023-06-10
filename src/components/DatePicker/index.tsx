import {useEffect, useState} from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {
  getReverseGeocoding,
  getHourMinutesFormated,
  getCurrentDate,
} from '../../utils';
import {
  createRegistryRequest,
  updateRegistryRequest,
} from '../../services/RegistriesRequests';
import {
  ButtonsContainer,
  DatePickerButton,
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
} from './styles';
import {DatePickerProps, SelectedTime} from './interface';
import {useTheme} from 'styled-components';
import {useReactQueryHook} from '../../hooks/useReactQueryHook';
import {useQueryClient} from '@tanstack/react-query';

export const DatePicker = ({registryType, registry}: DatePickerProps) => {
  const {COLORS} = useTheme();

  const queryClient = useQueryClient();

  const {useCreateRegistryMutation, useUpdateRegistryMutation} =
    useReactQueryHook({queryClient});

  const {mutateAsync: createRegistry} = useCreateRegistryMutation();

  const {mutateAsync: updateRegistry} = useUpdateRegistryMutation();

  const [addressLocation, setAddressLocation] = useState<string | undefined>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [hourAndMinutes, setHourAndMinutes] = useState<string | undefined>();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleSetLocationAddress = async () => {
    Geolocation.getCurrentPosition(async info => {
      setIsLoading(true);
      const {coords} = info;
      const address = await getReverseGeocoding(
        coords.latitude,
        coords.longitude,
      );
      setAddressLocation(address);
      setIsLoading(false);
    });
  };

  const showDatePicker = async () => {
    setDatePickerVisibility(true);
    const currentHourAndMinutes = getHourMinutesFormated(new Date());
    setHourAndMinutes(currentHourAndMinutes);
    await handleSetLocationAddress();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setAddressLocation('...');
    setHourAndMinutes('00:00');
  };

  const handleConfirm = async (
    time: string | undefined,
    location: string | undefined,
  ) => {
    if (registry) {
      await updateRegistry({
        registryId: registry?.id,
        registryData: {
          [registryType]: time,
          [`${registryType}_location`]: location,
        },
      });
    } else {
      const currentDate = getCurrentDate();
      await createRegistry({
        [registryType]: time,
        [`${registryType}_location`]: location,
        collaborator_id: 'test',
        date: currentDate,
      });
    }
    hideDatePicker();
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
          <ModalContent>
            <LocationContainer>
              <LocationIcon />
              {isLoading ? (
                <ActivityIndicator size="small" color={COLORS.GRAY_200} />
              ) : (
                <Text>{addressLocation}</Text>
              )}
            </LocationContainer>
            <TextContainer>
              <TimeText>{hourAndMinutes}</TimeText>
            </TextContainer>
            <ButtonsContainer>
              <ActionButton onPress={hideDatePicker} backgroundColor="red">
                <ActionButtonText>Cancelar</ActionButtonText>
              </ActionButton>
              <ActionButton
                onPress={() => {
                  if (isLoading) {
                    return;
                  }
                  handleConfirm(hourAndMinutes, addressLocation);
                }}
                backgroundColor={COLORS.BLUE_300}>
                {isLoading ? (
                  <ActivityIndicator size="small" color={COLORS.WHITE} />
                ) : (
                  <ActionButtonText>
                    {registry?.[registryType] ? 'Atualizar' : 'Adicionar'}
                  </ActionButtonText>
                )}
              </ActionButton>
            </ButtonsContainer>
          </ModalContent>
        </ModalContainer>
      </Modal>
      <View>
        <DatePickerButton
          backgroundColor={
            registry?.[registryType] ? COLORS.WHITE : COLORS.BLUE_300
          }
          onPress={showDatePicker}>
          {registry?.[registryType] ? <UpdateIcon /> : <DatePickerIcon />}
        </DatePickerButton>
      </View>
    </>
  );
};

export default DatePicker;
