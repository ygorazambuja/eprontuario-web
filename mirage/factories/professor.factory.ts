import { Factory } from 'miragejs'

import faker from 'faker'

export default {
  professor: Factory.extend({
    id: (i) => i,
    nome() {
      return faker.name.firstName()
    },
    siap() {
      return faker.datatype.number(9999999999)
    },
  }),
}
