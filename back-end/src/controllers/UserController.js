//Arquivo responsável pela lógica dos serviços das rotas de GET,PUT,POST e DELETE

const knex = require('../database/index')

module.exports = {
  
  //Função responsável por retornar todos os usuários
  async index (req, res, next) {
    try{
      const results = await knex('users')
  
      return res.json(results)
    } catch (error){
      next(error)
    }
  },

  //Função responsável por criar um usuário
  async create(req, res, next) {
    try {
      const { name, email, password } = req.body
      const created_at = new Date() 
      const updated_at = new Date()
      await knex('users').insert({
        name,
        email,
        password,
        created_at,
        updated_at
      })

      return res.status(201).send()
    } catch (error) {
        next(error)
      }
  },

  //Função responsável por atualizar os dados do usuário
  async update(req, res, next) {
    try {
      const { name, email, password, created_at } = req.body
      const { id } = req.params
      const updated_at = new Date() 

      await knex('users')
        .update({ 
          name, 
          email,
          password, 
          created_at, 
          updated_at
        })
        .where({ id })

      return res.send()

    } catch (error) {
        next(error)
      }
  },

  //Função responsável por remover um usuário do banco
  async delete(req, res, next) {
    try {
      const { id } = req.params
      await knex('users')
        .where({ id })
        .del()
          
      return res.send()
    } catch (error) {
        next(error)
      }
  },

  //Função responsável por retornar dados de um usuário específico
  async getUser (req,res,next) {
    try{
      const { id } = req.params
      const result = await knex('users')
        .where({ id })

      return res.json(result)
    } catch (error) {
      next(error)
    }

  },

  //Função que remove todos os usuários do banco
  async deleteAll (req,res,next) {  
    try{
      await knex('users').del()
      return res.status(200).send()
  
    } catch (error) {
      next(error)
    }
  }
}