import { Server } from 'miragejs'
import factories from './factories'
import seeds from './seeds'
import modules from './modules'

const config = (environment: string) => {
  const config = {
    environment,
    namespace: 'api',
    factories,
    timing: 800,
    seeds,
    routes() {
      Object.keys(modules).forEach((module) => {
        modules[module].default.call(this)
      })
    },
  }
  return config
}

export function makeServer({ environment = 'development' } = {}) {
  return new Server(config(environment))
}
