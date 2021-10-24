const knex = require('../database/index')

module.exports = {
  
  async index (req, res, next) {
    try{
      const results = await knex('users')
  
      return res.json(results)
    } catch (error){
      next(error)
    }
  },

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
  async deleteAll (req,res,next) {  
    try{
      await knex('users').del()
      return res.status(200).send()
  
    } catch (error) {
      next(error)
    }
  }
}