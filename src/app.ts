import express from 'express';
import index from './routes/index';
import boletoRoute from './routes/boletoRoute';

const app = express();

app.use('/', index);
app.use('/boleto', boletoRoute);

export default app;
