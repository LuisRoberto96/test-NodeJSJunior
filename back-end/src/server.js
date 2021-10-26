//Arquivo principal que será o servidor da aplicação, ao qual realizará a comunicação da aplicação

//dependências
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../swagger.json"
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require('./routes')

//porta e ip utilizados
const PORT = 3000;
const HOST = '0.0.0.0';

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(cors())
app.use(express.json())
app.use(routes)

//Validação de erro da comunicação de página ou serviço inexistente 
 app.use((req, res, next) => {
   const error = new Error('Not found')
   error.status = 404
   next(error)
 })

//Validação de erro da falha de comunicação do servidor interno
 app.use((error, req, res, next) => {
   res.status(error.status || 500)
   res.json({ error: error.message})
 })


app.listen(PORT,HOST)