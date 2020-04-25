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

  create (req, res) {
    knex('users').insert(req.body, '*')
      .then(result => res.status(201).json(result[0]))
  }
}

export default new UserController()
