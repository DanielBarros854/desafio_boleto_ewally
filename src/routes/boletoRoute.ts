import { Router,Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => res.status(200).send({
  message: 'rota boleto',
}));

router.get('/:barCode', (req: Request, res: Response) => res.status(200).send({
  message: 'rota boleto',
  barCode: req.params.barCode,
}));

export default router;
