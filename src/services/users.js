import knex from '../../server/common/db'

export class UsersServices {
  all () {
    return knex('users').select()
  }

  create (user) {
    if (!user.name) {
      throw new Error('Nome é um atributo obrigatório')
    } else {
      return knex('users').insert(user, '*')
    }
  }
}

export default new UsersServices()
