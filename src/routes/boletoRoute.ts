import { Router, Request, Response } from 'express'

export const boletoRouter = Router()

boletoRouter.get('/', (req: Request, res: Response) => res.status(200).json({
  message: 'rota boleto'
}))

boletoRouter.get('/:barCode', (req: Request, res: Response) => res.status(200).json({
  message: 'rota boleto',
  barCode: req.params.barCode
}))
