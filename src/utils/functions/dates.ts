export const monthDiff = (rawStartDate: string, rawEndDate: string) => {
  const startDate = new Date(rawStartDate);
  const endDate = new Date(rawEndDate);

  let months;
  months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += endDate.getMonth();
  return months <= 0 ? 0 : months;
};

export const getFormattedDate = (date: string) => {
  return new Date(date)
    .toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
    .replace(/^(\w)/, (match) => match.toUpperCase())
    .replace(' de', '');
};
