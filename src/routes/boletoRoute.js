import { Router } from "express";

const router = Router();

router.get('/', (req, res) => res.status(200).send({
  message: 'rota boleto',
}));

router.get('/:badCode', (req, res) => res.status(200).send({
  message: 'rota boleto',
  badCode: req.params.badCode,
}));

export default router;
