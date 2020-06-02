import UsersServices from '../../services/users'

export class UserController {
  async all (req, res) {
    try {
      const result = await UsersServices.all()
      res.status(200).json(result)
    } catch (error) {
      res.status(412).json('Erro ao buscar users')
    }
  }

  async create (req, res) {
    try {
      const result = await UsersServices.create(req.body)
      res.status(201).json(result[0])
    } catch (error) {
      res.status(400).json(error.message)
    }
  }
}

export default new UserController()
