import {useEffect, useState} from 'react';
import {LoadingDots} from '../Loaders';
import {getReverseGeocoding} from '../../utils';
import {LocationContainer, LocationIcon, Text, TextContainer} from './styles';
import {CurrentLocationProps} from './interface';

import Geolocation from '@react-native-community/geolocation';
import Toast from 'react-native-toast-message';
import {useTheme} from 'styled-components';

export const CurrentLocation = ({
  setLocation,
  setLoading,
}: CurrentLocationProps) => {
  const {COLORS, FONT_SIZE} = useTheme();
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
    <LocationContainer>
      {locationIsLoading ? (
        <LoadingDots />
      ) : (
        <>
          <TextContainer>
            <LocationIcon />
            <Text color={COLORS.BLUE_400} size={FONT_SIZE.SM}>
              Local
            </Text>
          </TextContainer>
          <Text>{addressLocation}</Text>
        </>
      )}
    </LocationContainer>
  );
};
