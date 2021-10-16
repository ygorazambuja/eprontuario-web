import { Factory } from 'miragejs'
import faker from 'faker'

export default {
  login: Factory.extend({
    email() {
      return faker.internet.email()
    },
    senha() {
      return '123123123'
    },
  }),
}
