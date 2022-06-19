import { Request, Response } from 'express';

import { bankSlip } from './bankSlip';
import { dealershipTicket } from './dealershipTicket';

export const ticketValidator = (req: Request, res: Response) => {
  const { barCode } = req.params;

  if (!/^[0-9]{47}$/.test(barCode) && !/^[0-9]{44}$/.test(barCode)) {
    return res.status(400).json({
      error: {
        message: 'Erro, Formato de codigo incorreto!'
      }
    });
  }

  const initialValueDealershipTicket = '8';
  const bankBarCodeHasPosition = 47;
  const dealershipBarCodeHasPosition = 44;

  if (barCode.length === bankBarCodeHasPosition) {
    const result = bankSlip(barCode);
    return res.status(result.code).json(result.data);
  }

  if (
    barCode.length === dealershipBarCodeHasPosition &&
    barCode[0] === initialValueDealershipTicket
  ) {
    const result = dealershipTicket(barCode);
    return res.status(result.code).json(result.data);
  }
};
