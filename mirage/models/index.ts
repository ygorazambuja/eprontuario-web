import { Model } from 'miragejs'

export default {
  paciente: Model.extend({
    nome: '',
    cpf: '',
    sexo: '',
  }),

  login: Model.extend({
    email: '',
    password: '',
  }),
}
