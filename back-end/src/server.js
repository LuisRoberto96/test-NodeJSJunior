const express = require("express");
const app = express();
const knex = require ('./database')
const routes = require('./routes')

app.use(express.json())
app.use(routes)

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})


app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({ error: error.message})
})


app.listen(3000);