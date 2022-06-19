import { getAmountToBankSlip, getExpirantionDateToBankSlip, validatorDVToBankSlip } from '../functions';

export const bankSlip = (barCode: string) => {
  if (!validatorDVToBankSlip(barCode)) {
    return {
      code: 400,
      message: 'Erro, digito validador incorreto!'
    };
  }

  const expirantionDate = getExpirantionDateToBankSlip(barCode);
  const amount = getAmountToBankSlip(barCode);

  return {
    code: 200,
    data: {
      amount,
      expirantionDate,
      barCode
    }
  };
};
