export class UserController {
  async all (req, res) {
    try {
      const user = [
        { name: 'Gil', email: 'gil@email.com' }
      ]
      res.status(200).json(user)
    } catch (error) {
      res.status(412).json('Erro ao buscar users')
    }
  }

  async create (req, res) {
    try {
      res.status(201).json(req.body)
    } catch (error) {

    }
  }
}

export default new UserController()
