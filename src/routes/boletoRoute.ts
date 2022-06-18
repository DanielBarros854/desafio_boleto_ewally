import { Router, Request, Response } from 'express'
import { boletoValidator } from '../controllers/boletoValidator'

export const boletoRouter = Router()

boletoRouter.get('/:barCode', (req: Request, res: Response) => res.json(boletoValidator(req)))
