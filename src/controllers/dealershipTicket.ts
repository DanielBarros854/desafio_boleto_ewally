import { checkDigitValidatorModuleEleven, checkDigitValidatorModuleTen, getAmountToDealershipTicket, getExpirantionDateToDealershipTicket } from '../functions';

export const dealershipTicket = (barCode: string) => {
  if (!validatorDVToDealershipTicket(barCode)) {
    return {
      code: 400,
      message: 'Erro, digito validador incorreto!'
    };
  }

  const amount = getAmountToDealershipTicket(barCode);
  const expirantionDate = getExpirantionDateToDealershipTicket(barCode);

  return {
    code: 200,
    data: {
      amount,
      expirantionDate,
      barCode
    }
  };
};

const validatorDVToDealershipTicket = (barCode: string) => {
  const fieldToValidate = barCode.slice(0, 3) + barCode.slice(4);
  const currencyCode = barCode.slice(2, 3);
  const dv = barCode.slice(3, 4);
  let isValidDv: boolean;

  switch (currencyCode) {
    case '6':
    case '7':
      isValidDv = checkDigitValidatorModuleTen(fieldToValidate) === parseInt(dv);
      break;

    case '8':
    case '9':
      isValidDv = checkDigitValidatorModuleEleven(fieldToValidate) === parseInt(dv);
      break;

    default:
      return false;
  }

  return isValidDv;
};
