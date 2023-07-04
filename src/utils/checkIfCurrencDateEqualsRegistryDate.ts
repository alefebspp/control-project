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
    registryDate = new Date();
  }
  const currentDate = new Date();
  const currentDateString = formatDateISOString(
    resetDateTime(currentDate)!.toISOString(),
  );

  const registryDateString = formatDateISOString(
    new Date(registryDate).toISOString(),
  );

  return currentDateString == registryDateString;
}
