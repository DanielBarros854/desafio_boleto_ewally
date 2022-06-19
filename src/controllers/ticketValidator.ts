import { Request } from 'express'

import { barCodeHasPosition } from '../config'
import { bankSlip } from './bankSlip'
import { dealershipTicket } from './dealershipTicket'

export const ticketValidator = (req: Request) => {
  const { barCode } = req.params

  if (barCode.length === barCodeHasPosition.bank) {
    return bankSlip(barCode)
  }

  if (barCode.length === barCodeHasPosition.dealership) {
    return dealershipTicket(barCode)
  }

  return {
    code: 400,
    error: true
  }
}
