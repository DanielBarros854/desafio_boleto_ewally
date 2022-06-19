export const formatCurrencyToBankSlip = (code: string, amount: number) => {
  switch (code) {
    case '9':
      return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    default:
      return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
};
