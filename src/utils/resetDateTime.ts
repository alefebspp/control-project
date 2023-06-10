export const resetDateTime = (date: Date | undefined) => {
  if (date) {
    const newDate = new Date(date);
    newDate.setUTCHours(0, 0, 0, 0);
    return newDate;
  }
};
