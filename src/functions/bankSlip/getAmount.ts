import { formatCurrency } from './formatCurrency'

export const getAmount = (barCode: string) => {
  const amountAfterComma = parseInt(barCode.slice(45))
  const amountPreComma = parseInt(barCode.slice(37, 45))
  const currencyCode = barCode.slice(3, 4)

  const amount = amountPreComma + (amountAfterComma / 100)
  return formatCurrency(currencyCode, amount)
}
