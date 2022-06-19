import { getAmount, getExpirantionDate, validatorDV } from '../functions'

export const bankSlip = (barCode: string) => {
  if (!validatorDV(barCode)) {
    return {
      code: 400,
      error: true,
      message: 'Erro, digito validador incorreto!'
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
