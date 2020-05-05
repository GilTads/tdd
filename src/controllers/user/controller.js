import knex from '../../../server/common/db'

export class UserController {
  async all (req, res) {
    try {
      const result = await knex('users').select()
      res.status(200).json(result)
    } catch (error) {
      res.status(412).json('Erro ao buscar users')
    }
  }

  async create (req, res) {
    const result = await knex('users').insert(req.body, '*')
    res.status(201).json(result[0])
  }
}

export default new UserController()
