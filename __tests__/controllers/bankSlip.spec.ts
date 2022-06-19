import { formatCurrencyToBankSlip } from '../../src/functions/bankSlip/formatCurrencyToBankSlip';

const makeSut = () => {
  const sut = { formatCurrencyToBankSlip };
  return {
    sut
  };
};

describe('Format Currency To Bank Slip', () => {
  test('should return with pt-BR if code is equal to 9', () => {
    const { sut } = makeSut();
    const code = '9';
    const amount = 1;
    const sutReturn = sut.formatCurrencyToBankSlip(code, amount);
    expect(sutReturn).toBe(amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
  });

  test('should return with default value if code is not registered', () => {
    const { sut } = makeSut();
    const code = '999';
    const amount = 1;
    const sutReturn = sut.formatCurrencyToBankSlip(code, amount);
    expect(sutReturn).toBe(amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
  });

  test('should return with correct value if amount is equal 0', () => {
    const { sut } = makeSut();
    const code = '9';
    const amount = 0;
    const sutReturn = sut.formatCurrencyToBankSlip(code, amount);
    expect(sutReturn).toBe(amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
  });

  test('should return with correct value if amount is negative', () => {
    const { sut } = makeSut();
    const code = '9';
    const amount = -1;
    const sutReturn = sut.formatCurrencyToBankSlip(code, amount);
    expect(sutReturn).toBe(amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
  });
});
