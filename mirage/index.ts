import { Server } from 'miragejs'
import routes from './routes'
import factories from './factories'
import seeds from './seeds'

const config = (environment: string) => {
  const config = {
    environment,
    namespace: 'api',
    factories,
    seeds,
    routes,
  }
  return config
}

export function makeServer({ environment = 'development' } = {}) {
  return new Server(config(environment))
}
