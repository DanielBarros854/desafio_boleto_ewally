import { Router, Request, Response } from 'express'
import { ticketValidator } from '../controllers'

export const ticketRouter = Router()

ticketRouter.get('/:barCode', (req: Request, res: Response) => res.json(ticketValidator(req)))
