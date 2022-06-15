import express, { Router } from 'express';

// Rotas
import index from './routes/index.js';
import boletoRoute from './routes/boletoRoute.js';

export const app = express();
const router = Router();

app.use('/', index);
app.use('/boleto', boletoRoute);
