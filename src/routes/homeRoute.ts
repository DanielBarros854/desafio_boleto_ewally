import { Router, Request, Response } from 'express';

export const homeRouter = Router();

homeRouter.get('/', (req: Request, res: Response) => res.status(200).send(`
<div style="text-align: center">
  <h1>Validador de boleto</h1>
  <h2>Acesse a seguinte rota http://localhost:${process.env.PORT}/boleto/{codigoDoBoleto}</h2>
  <h2>Pode ser usado esses codigos de barra para testar</h2>
  <h2>Boleto concessionária: 85810000460524601792022062230508683148300001</h2>
  <h2>Boleto bancario: 00190500954014481606906809350314437370000000100</h2>
</div>
`));
