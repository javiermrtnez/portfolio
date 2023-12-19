export const getExperienceYears = () => {
  // 1 de Octubre de 2021
  const initialDate = '2021/10/01';

  const givenDate = new Date(initialDate);
  const today = new Date();

  const diff = today.getTime() - givenDate.getTime();
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

  const years = diff / millisecondsInYear;
  const formattedYears = years.toFixed(1);

  return formattedYears;
};

export const getMonthDiff = (startDate: Date, rawEndDate: Date | undefined) => {
  const endDate = rawEndDate ?? new Date();

  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();

  const monthDiff = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;

  if (monthDiff >= 12) {
    const years = Math.floor(monthDiff / 12);
    const remainingMonths = monthDiff % 12;

    if (remainingMonths === 0) {
      return `${years} año${years > 1 ? 's' : ''}`;
    } else {
      return `${years} año${years > 1 ? 's' : ''} ${remainingMonths} mes${
        remainingMonths > 1 ? 'es' : ''
      }`;
    }
  }

  return `${monthDiff} mes${monthDiff > 1 ? 'es' : ''}`;
};

export const getFormattedDate = (date: Date | undefined) => {
  if (!date) {
    return 'Actualidad';
  }

  return date
    .toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
    .replace(/^(\w)/, (match) => match.toUpperCase())
    .replace(' de', '');
};
