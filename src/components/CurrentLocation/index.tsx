import {useEffect, useState} from 'react';
import {LoadingDots} from '../Loaders';
import {getReverseGeocoding} from '../../utils';
import {LocationContainer, LocationIcon, Text} from './styles';
import {CurrentLocationProps} from './interface';

import Geolocation from '@react-native-community/geolocation';
import Toast from 'react-native-toast-message';

export const CurrentLocation = ({
  setLocation,
  setLoading,
}: CurrentLocationProps) => {
  const [addressLocation, setAddressLocation] = useState<string | undefined>();
  const [locationIsLoading, setLocationIsLoading] = useState<boolean>(false);

  const handleSetLocationAddress = async () => {
    setLocationIsLoading(true);
    Geolocation.getCurrentPosition(async info => {
      try {
        const {coords} = info;
        const address = await getReverseGeocoding(
          coords.latitude,
          coords.longitude,
        );
        setAddressLocation(address);
      } catch (error) {
        Toast.show({
          type: 'info',
          text1: 'Aviso',
          text2: 'Impossível recuperar localização',
        });
      } finally {
        setLocationIsLoading(false);
      }
    });
  };

  useEffect(() => {
    handleSetLocationAddress();
  }, []);

  useEffect(() => {
    setLoading(locationIsLoading);
  }, [locationIsLoading]);

  useEffect(() => {
    if (addressLocation) {
      setLocation(addressLocation);
    }
  }, [addressLocation]);

  return (
    <LocationContainer height={20}>
      {locationIsLoading ? (
        <LoadingDots />
      ) : (
        <>
          <LocationIcon />
          <Text>{addressLocation}</Text>
        </>
      )}
    </LocationContainer>
  );
};
