import { Router } from 'express';

import { ticketValidator } from '../controllers';

export const ticketRouter = Router();

ticketRouter.get('/:barCode', ticketValidator);
