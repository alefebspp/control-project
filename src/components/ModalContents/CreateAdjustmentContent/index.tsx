import {FC, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useQueryClient} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {yupResolver} from '@hookform/resolvers/yup';

import {Clock} from '../../Clock';
import {CurrentLocation} from '../../CurrentLocation';
import {Input} from '../../Input';
import {DatePicker} from '../../DatePicker';
import {Button} from '../../Button';

import {CreateAdjustmentContentProps, FormDataProps} from './interface';
import {convertRegistryType, requestSchema} from '../../../utils';
import {useAdjustmentsRequests} from '../../../hooks/requests/useAdjustmentsRequests';
import {NavigationProps} from '../../../routes/interface';

import {
  ButtonsContainer,
  InputContainer,
  MessageIcon,
  RequestContainer,
} from '../../ModalDatePicker/styles';

export const CreateAdjustmentModalContent: FC<CreateAdjustmentContentProps> = ({
  hideDatePicker,
  registryType,
  registry,
}) => {
  const [addressLocation, setAddressLocation] = useState<string | undefined>();
  const [locationIsLoading, setLocationIsLoading] = useState<boolean>(false);
  const [hourAndMinutes, setHourAndMinutes] = useState<string | undefined>();

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
    <>
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
        {hourAndMinutes && !locationIsLoading ? (
          <ButtonsContainer height={10}>
            <Button
              canHide
              isLoading={creatingAdjustment}
              type="SECONDARY"
              onPress={handleSubmit(handleCreateAdjustment)}>
              Solicitar
            </Button>
          </ButtonsContainer>
        ) : null}
      </RequestContainer>
    </>
  );
};
