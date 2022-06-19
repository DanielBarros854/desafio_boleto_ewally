import { Request, Response } from 'express';

import { barCodeHasPosition } from '../config';
import { bankSlip } from './bankSlip';
import { dealershipTicket } from './dealershipTicket';

export const ticketValidator = (req: Request, res: Response) => {
  const { barCode } = req.params;
  const initialValueDealershipTicket = '8';

  if (barCode.length === barCodeHasPosition.bank) {
    const result = bankSlip(barCode);
    return res.status(result.code).json(result.data);
  }

  if (
    barCode.length === barCodeHasPosition.dealership &&
    barCode[0] === initialValueDealershipTicket
  ) {
    const result = dealershipTicket(barCode);
    return res.status(result.code).json(result.data);
  }

  return res.status(400).json({
    error: {
      message: 'Erro, Formato de codigo incorreto!'
    }
  });
};
