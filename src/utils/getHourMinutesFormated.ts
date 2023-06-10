export const getHourMinutesFormated = (currentDate: Date) => {
  return currentDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
};
