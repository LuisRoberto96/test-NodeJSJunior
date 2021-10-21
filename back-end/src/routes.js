const express = require("express");
const knex = require ('./database')
const routes = express.Router()
const UserController = require('./controllers/UserController')


routes
  .get('/api/v1/users', UserController.index)
  .get('/api/v1/users/:id', UserController.getUser)
  .post('/api/v1/users', UserController.create)
  .put('/api/v1/users/:id', UserController.update)
  .delete('/api/v1/users/:id', UserController.delete)
  .delete('/api/v1/users', UserController.deleteAll)


module.exports = routes