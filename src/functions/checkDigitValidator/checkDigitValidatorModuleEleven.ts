export const checkDigitValidatorModuleEleven = (validatorDigit: string) => {
  const allNumberFormated = [];
  let multiplier = 2;

  for (let i = validatorDigit.length - 1; i >= 0; i--) {
    let number = parseInt(validatorDigit[i]);
    number *= multiplier;

    multiplier = multiplier === 9
      ? 2
      : ++multiplier;

    allNumberFormated.push(
      number
    );
  }

  const sumNumbers = allNumberFormated.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  const moduleEleven = sumNumbers % 11;

  const correctValidatorDigit = 11 - moduleEleven;

  switch (correctValidatorDigit) {
    case 0:
    case 10:
    case 11:
      return 1;

    default:
      return correctValidatorDigit;
  }
};
