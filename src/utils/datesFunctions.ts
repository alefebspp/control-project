import {monthMap} from './monthMap';

export function transformDateToString(date: Date | undefined) {
  if (date) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = String(newDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(newDate.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}

export function getCurrentDate(excludeDay: boolean = false) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  if (excludeDay) {
    return `${month}-${year}`;
  }
  return `${year}-${month}-${day}`;
}

export const getCurrentMonthAndYearDescription = () => {
  const currentMonthAndYear = getCurrentDate(true);

  const currentMonthAndYearSplited = currentMonthAndYear.split('-');

  const year = currentMonthAndYearSplited[1];

  const month = currentMonthAndYearSplited[0];

  const monthDescription = monthMap[month];

  return `${monthDescription} de ${year}`;
};

export const getMonthAndYearDescription = (dateString: string | undefined) => {
  if (dateString) {
    const splitedDateString = dateString.split('-');

    const year = splitedDateString[0];

    const monthLabel = monthMap[splitedDateString[1]];

    return `${monthLabel} de ${year}`;
  }
};
