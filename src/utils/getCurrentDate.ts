export function getCurrentDate(excludeDay: boolean = false) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getUTCDate()).padStart(2, '0');
  if (excludeDay) {
    return `${month}-${year}`;
  }
  return `${year}-${month}-${day}`;
}

export function transformDateToString(date: Date | undefined) {
  if (date) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = String(newDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(newDate.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
