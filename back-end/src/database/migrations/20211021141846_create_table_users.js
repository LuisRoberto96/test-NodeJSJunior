
exports.up = knex =>
knex.schema.createTable('users', table =>{
  table.increments('id').primary().notNullable()
  table.text('username').notNullable()
  table.text('email').notNullable()
  table.text('password').notNullable()
  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').notNullable(knex.fn.now())
})

exports.down = knex =>
knex.schema.dropTable('users')

