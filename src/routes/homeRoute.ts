import { Router, Request, Response } from 'express';

export const homeRouter = Router();

homeRouter.get('/', (req: Request, res: Response) => res.status(200).json({
  title: 'Express API',
  version: '1.0'
}));
