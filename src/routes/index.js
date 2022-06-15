import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.status(200).send({
  title: 'Express API',
  version: '1.0',
}));

export default router;
