import knex from 'knex'
import config from '../../knexfile'

// TODO criar chaveamento dinâmico
export default knex(config.test)
