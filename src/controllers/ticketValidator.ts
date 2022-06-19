import { Request, Response } from 'express';

import { barCodeHasPosition } from '../config';
import { bankSlip } from './bankSlip';
import { dealershipTicket } from './dealershipTicket';

export const ticketValidator = (req: Request, res: Response) => {
  const { barCode } = req.params;
  const initialValueDealershipTicket = '8';

  if (barCode.length === barCodeHasPosition.bank) {
    const data = bankSlip(barCode);
    return res.status(data.code).json(data.data);
  }

  if (
    barCode.length === barCodeHasPosition.dealership &&
    barCode[0] === initialValueDealershipTicket
  ) {
    const data = dealershipTicket(barCode);
    return res.status(data.code).json(data?.data);
  }

  return res.status(400).json({
    error: {
      message: 'Erro, digito validador incorreto!'
    }
  });
};
