import { fixedDataBase } from '../../config'

export const getExpirantionDate = (barCode: string) => {
  const expirantionFactor = barCode.slice(33, 37)

  return new Date(fixedDataBase.setDate(fixedDataBase.getDate() + parseInt(expirantionFactor))).toLocaleDateString('pt-BR')
}
