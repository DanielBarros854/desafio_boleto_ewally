import 'dotenv/config';
import express from 'express';
import { port } from './config';
import { ticketRouter, homeRouter } from './routes';

const app = express();

app.use('/', homeRouter);
app.use('/boleto', ticketRouter);

app.listen(
  port,
  () => console.log(`Server is running 🚀 at: http://localhost:${port}`)
);
