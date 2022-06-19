export const checkDigitValidatorModuleTen = (fieldToValidate: string) => {
  const allNumberFormated = [];
  let multiplier = 2;

  for (let i = fieldToValidate.length - 1; i >= 0; i--) {
    let number = parseInt(fieldToValidate[i]);

    number *= multiplier;
    while (number > 9) {
      const digits = ('' + number).split('');
      number = digits.reduce(
        (previousValue, currentValue) => previousValue + parseInt(currentValue),
        0
      );
    }

    multiplier = multiplier === 2
      ? --multiplier
      : ++multiplier;

    allNumberFormated.push(
      number
    );
  }

  const sumNumbers = allNumberFormated.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  const sumNumbersSplitted = (('' + sumNumbers).split(''));

  let tenImmediatelyAfterSumNumbers: number;

  if (sumNumbers < 9) {
    tenImmediatelyAfterSumNumbers = 10;
  } else {
    tenImmediatelyAfterSumNumbers = sumNumbersSplitted[sumNumbersSplitted.length - 1] === '0'
      ? sumNumbers
      : sumNumbers + 10 - parseInt(sumNumbersSplitted[sumNumbersSplitted.length - 1]);
  }

  const correctValidatorDigit = tenImmediatelyAfterSumNumbers - sumNumbers;

  if (correctValidatorDigit === 10) {
    return 0;
  }

  return correctValidatorDigit;
};
