export function getExperienceYears() {
  // 1 de Octubre de 2021
  const initialDate = '2021/10/01';

  const givenDate = new Date(initialDate);
  const today = new Date();

  const diff = today.getTime() - givenDate.getTime();
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

  const years = diff / millisecondsInYear;
  const formattedYears = years.toFixed(1);

  return formattedYears;
}
