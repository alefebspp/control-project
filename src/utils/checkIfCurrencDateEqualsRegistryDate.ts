import {resetDateTime} from './resetDateTime';

function formatDateISOString(ISOString: string | undefined) {
  if (!ISOString) {
    return;
  }
  const splitedISOString = ISOString.split('T');
  const formatedString = splitedISOString[0];
  return formatedString;
}

export function checkIfCurrentDateEqualsRegistryDate(
  registryDate: Date | undefined,
) {
  if (!registryDate) {
    return true;
  }
  if (registryDate) {
    const currentDate = new Date();
    const resetCurrentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
    );
    const registryNewDate = new Date(registryDate);
    const resetRegistryDate = new Date(
      registryNewDate.getUTCFullYear(),
      registryNewDate.getUTCMonth(),
      registryNewDate.getUTCDate(),
    );

    return resetCurrentDate.getTime() === resetRegistryDate.getTime();
  }
}
