export const getAmountToDealershipTicket = (barCode: string) => {
  const amountAfterComma = parseInt(barCode.slice(13, 15));
  const amountPreComma = parseInt(barCode.slice(5, 13));

  const amount = amountPreComma + (amountAfterComma / 100);
  return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};
