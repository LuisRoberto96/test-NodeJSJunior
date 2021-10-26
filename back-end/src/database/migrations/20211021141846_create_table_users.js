//Arquivo de migrations padrão da tabela de exemplo

exports.up = knex =>
knex.schema.createTable('users', table =>{
  table.increments('id')
  table.text('name').notNullable()
  table.text('email').notNullable()
  table.text('password').notNullable()
  table.text('created_at').notNullable()
  table.text('updated_at').notNullable()
})

exports.down = knex =>
knex.schema.dropTable('users')

