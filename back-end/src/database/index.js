const knexfile = require('../../knexfile')
const knex = require ('knex')

const env = 'development';
const configOptions = knexfile[env];

module.exports = knex(configOptions)