import {getCurrentDate} from '../../utils';
import {useRegistriesRequests} from '../requests/useRegistriesRequests';
import {useAuthContext} from '../useAuth';
import {getErrorMessage} from '../../utils/AppError';
import Toast from 'react-native-toast-message';
import {CreateRegistryParams, UpdateRegistryParams} from './interface';

export const useRegistries = () => {
  const {user} = useAuthContext();

  const {create, update} = useRegistriesRequests();

  const createRegistryRequest = create();

  const updateRegistryRequest = update();

  const handleCreateRegistry = async ({
    time,
    location,
    registryType,
    closeModalFunction,
  }: CreateRegistryParams) => {
    try {
      const currentDate = getCurrentDate();

      await createRegistryRequest.execute({
        registry_type: registryType,
        start: time,
        start_location: location,
        collaborator_id: user?.user_id,
        date: currentDate,
        company_id: user?.user_company,
      });

      closeModalFunction();
    } catch (error) {
      const message = getErrorMessage(error);
      Toast.show({
        type: 'info',
        text1: 'Aviso',
        text2: message,
      });
    }
  };

  const handleUpdateRegistry = async ({
    time,
    location,
    registryType,
    registryId,
    closeModalFunction,
  }: UpdateRegistryParams) => {
    try {
      await updateRegistryRequest.execute({
        registryId,
        registryType,
        registryData: {
          [registryType]: time,
          [`${registryType}_location`]: location,
        },
      });
      closeModalFunction();
    } catch (error) {
      const message = getErrorMessage(error);
      Toast.show({
        type: 'info',
        text1: 'Aviso',
        text2: message,
      });
    }
  };

  return {
    createRegistry: {
      execute: handleCreateRegistry,
      isLoading: createRegistryRequest.isLoading,
    },
    updateRegistry: {
      execute: handleUpdateRegistry,
      isLoading: updateRegistryRequest.isLoading,
    },
  };
};
