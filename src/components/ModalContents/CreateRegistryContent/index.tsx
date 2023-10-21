import {FC, useState} from 'react';
import {CurrentLocation} from '../../CurrentLocation';
import {Button} from '../../Button';

import {CreateRegistryModalContentProps} from './interface';

import {ButtonsContainer, TimeText} from '../../ModalDatePicker/styles';

export const CreateRegistryModalContent: FC<
  CreateRegistryModalContentProps
> = ({timeText, onSubmit, submitIsLoading}) => {
  const [addressLocation, setAddressLocation] = useState<string | undefined>();
  const [locationIsLoading, setLocationIsLoading] = useState<boolean>(false);

  return (
    <>
      <CurrentLocation
        setLoading={setLocationIsLoading}
        setLocation={setAddressLocation}
      />

      <TimeText>{timeText}</TimeText>

      <ButtonsContainer height={30}>
        {!locationIsLoading && (
          <Button
            isLoading={submitIsLoading}
            type="SECONDARY"
            onPress={() => onSubmit(addressLocation)}>
            Adicionar
          </Button>
        )}
      </ButtonsContainer>
    </>
  );
};
