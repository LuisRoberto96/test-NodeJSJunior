// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'test',
      host: 'db',
      user: 'postgres',
      password: 'postgres'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
  


};
