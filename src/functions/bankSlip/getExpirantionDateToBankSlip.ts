import { fixedDataBase } from '../../config';

export const getExpirantionDateToBankSlip = (barCode: string) => {
  const expirantionFactor = barCode.slice(33, 37);
  const expirantionFactorSplited = ('' + expirantionFactor).split('');

  if (expirantionFactorSplited.every((expirantionFactorNumber) => expirantionFactorNumber === '0')) {
    return '--/--/----';
  }

  return new Date(fixedDataBase.setDate(fixedDataBase.getDate() + parseInt(expirantionFactor))).toLocaleDateString('pt-BR');
};
