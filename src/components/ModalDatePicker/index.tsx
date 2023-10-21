import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';

import {CustomModal} from '../';
import {CreateRegistryModalContent} from '../ModalContents/CreateRegistryContent';
import {CreateAdjustmentModalContent} from '../ModalContents/CreateAdjustmentContent';

import {
  getHourMinutesFormated,
  checkIfCurrentDateEqualsRegistryDate,
} from '../../utils';
import {DatePickerProps} from './interface';
import {useRegistries} from '../../hooks/registries/useRegistries';

import {
  ModalDatePickerButton,
  DatePickerIcon,
  UpdateIcon,
  CalendarIcon,
  PencilIcon,
} from './styles';

export const ModalDatePicker = ({registryType, registry}: DatePickerProps) => {
  const [hourAndMinutes, setHourAndMinutes] = useState<string | undefined>();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const {COLORS} = useTheme();
  const {createRegistry, updateRegistry} = useRegistries();

  const handleUpdateOrCreateRegistry = (addressLocation?: string) => {
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
  const showAdjustmentContent =
    registryTypeAlreadyExists || !currentDateEqualsRegistryDate;

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
      <CustomModal
        headerIcon={showAdjustmentContent ? <PencilIcon /> : <CalendarIcon />}
        headerTitle={
          showAdjustmentContent ? 'Solicitar ajuste' : 'Novo registro'
        }
        height={showAdjustmentContent ? 100 : 50}
        onClose={hideDatePicker}
        isModalVisible={isDatePickerVisible}>
        {!showAdjustmentContent ? (
          <CreateRegistryModalContent
            submitIsLoading={
              createRegistry.isLoading || updateRegistry.isLoading
            }
            timeText={hourAndMinutes}
            onSubmit={handleUpdateOrCreateRegistry}
          />
        ) : (
          <CreateAdjustmentModalContent
            hideDatePicker={hideDatePicker}
            registryType={registryType}
            registry={registry}
          />
        )}
      </CustomModal>
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
