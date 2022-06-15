import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => res.status(200).json({
  title: 'Express API',
  version: '1.0'
}))

export default router
