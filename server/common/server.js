import Express from 'express'
import * as http from 'http'
import * as bodyParser from 'body-parser'
import * as os from 'os'

const app = Express()

export default class ExpressServer {
  constructor () {
    app.use(bodyParser.json())
  }

  router (routes) {
    routes(app)
    return this
  }

  listen (port = process.env.PORT) {
    const welcome = p => () => console.info(`Up and running in ${process.env.NODE_ENV ||
      'development'} @: ${os.hostname()} on port ${p}`)
    if (process.env.NODE_ENV !== 'test') { http.createServer(app.listen(port, welcome(port))) }
    return app
  }
}
