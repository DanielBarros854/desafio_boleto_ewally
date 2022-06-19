import { checkDigitValidatorModuleEleven, checkDigitValidatorModuleTen } from '../checkDigitValidator';

export const validatorDVToBankSlip = (barCode: string) => {
  const dividedField = [
    {
      fieldToValidate: barCode.slice(0, 9),
      dv: barCode.slice(9, 10)
    },
    {
      fieldToValidate: barCode.slice(10, 20),
      dv: barCode.slice(20, 21)
    },
    {
      fieldToValidate: barCode.slice(21, 31),
      dv: barCode.slice(31, 32)
    }
  ];

  const isValidDvs = dividedField.every(
    (field) => checkDigitValidatorModuleTen(field.fieldToValidate) === parseInt(field.dv)
  );

  const fieldToValidateFourDV = barCode.slice(0, 32) + barCode.slice(33);

  const isValidFourDv = checkDigitValidatorModuleEleven(fieldToValidateFourDV) === parseInt(barCode.slice(32, 33));

  if (isValidDvs && isValidFourDv) {
    return true;
  }

  return false;
};
