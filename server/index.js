import './common/env'
import Server from './common/server'
import routes from './routes'
// import connection from './common/db'

export default new Server()
  // .dbConnection(connection)
  .router(routes)
  .listen(process.env.PORT)
