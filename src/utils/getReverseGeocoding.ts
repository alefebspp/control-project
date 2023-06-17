import axios from 'axios';

export const getReverseGeocoding = async (
  latitude: number,
  longitude: number | null,
) => {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
    );
    const {address, display_name} = response.data;

    const ISO: string = address['ISO3166-2-lvl4'];
    const ISOSplited = ISO.split('-');
    const displayName = display_name;
    const splitedDisplayName = displayName.split(',');
    const road = splitedDisplayName[0];
    const suburb = splitedDisplayName[1];
    const secondSuburb = splitedDisplayName[2];
    const municipality = splitedDisplayName[3];
    const state = ISOSplited[1];
    const locationAddress = `${road}, ${suburb}, ${secondSuburb}, ${municipality}, ${state}`;

    return locationAddress;
  } catch (error) {
    console.error(error);
  }
};
