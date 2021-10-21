const knexfile = require('../../knexfile');

//mudar isso aqui
const knex = require('knex')(knexfile['development']);

module.exports = knex