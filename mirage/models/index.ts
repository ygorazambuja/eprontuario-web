import { Model } from 'miragejs'

export default {
  paciente: Model.extend({
    nome: '',
    cpf: '',
    sexo: '',
  }),
}
