import { Factory } from 'miragejs'
import faker from 'faker'

export default {
  paciente: Factory.extend({
    id: (i) => i,
    nome() {
      return faker.name.firstName()
    },
    cpf() {
      return faker.datatype.number(99999999999)
    },
    genero() {
      return faker.random.arrayElement(['Masculino', 'Feminino'])
    },
  }),
}
