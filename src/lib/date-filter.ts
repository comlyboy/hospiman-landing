export function isDateWithinRange(displayDate: string, startDate: string, endDate: string): boolean {
  const date = new Date(displayDate);

  if (startDate && date < new Date(startDate)) {
    return false;
  }

  if (endDate) {
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);
    if (date > end) {
      return false;
    }
  }

  return true;
}
