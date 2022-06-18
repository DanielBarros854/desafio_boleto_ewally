import { getAmount, getExpirantionDate, validatorDV } from '../utils'

export const boletoBancario = (barCode: string) => {
  if (!validatorDV(barCode)) {
    return {
      code: 400,
      error: true
    }
  }

  const expirantionDate = getExpirantionDate(barCode)
  const amount = getAmount(barCode)

  return {
    code: 200,
    error: false,
    data: {
      amount,
      expirantionDate,
      barCode
    }
  }
}
