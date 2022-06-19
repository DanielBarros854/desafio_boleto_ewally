export const getExpirantionDateToDealershipTicket = (barCode: string) => {
  const year = barCode.slice(19, 23);
  const mounth = barCode.slice(23, 25);
  const day = barCode.slice(25, 27);

  const dateFormated = `${year}-${mounth.padStart(2, '0')}-${day.padStart(2, '0')}`;

  return dateFormated;
};
