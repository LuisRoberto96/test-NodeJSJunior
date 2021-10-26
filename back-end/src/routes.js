//Arquivo responsável pela separação das rotas de cada endpoint

const express = require("express");
const routes = express.Router()
const UserController = require('./controllers/UserController')


//Rotas de GET,POST,PUT e DELETE de acordo com a documentação
routes
  .get('/api/v1/users', UserController.index)
  .get('/api/v1/users/:id', UserController.getUser)
  .post('/api/v1/users', UserController.create)
  .put('/api/v1/users/:id', UserController.update)
  .delete('/api/v1/users/:id', UserController.delete)
  .delete('/api/v1/users', UserController.deleteAll)


module.exports = routes