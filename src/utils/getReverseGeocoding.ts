import axios from 'axios';

export const getReverseGeocoding = async (
  latitude: number,
  longitude: number | null,
) => {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
    );
    const {address} = response.data;
    const ISO: string = address['ISO3166-2-lvl4'];
    const ISOSplited = ISO.split('-');
    const state = ISOSplited[1];

    const locationAddress = `${address.road}, ${address.suburb}, ${address.municipality}, ${state}`;
    return locationAddress;
  } catch (error) {
    console.error(error);
  }
};
