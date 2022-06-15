import 'dotenv/config'
import express from 'express'
import index from './routes/index'
import boletoRoute from './routes/boletoRoute'

const app = express()

app.use('/', index)
app.use('/boleto', boletoRoute)

const port = process.env.PORT || '4000'

app.listen(
  port,
  () => console.log(`Server is running 🚀 at: http://localhost:${port}`)
)
