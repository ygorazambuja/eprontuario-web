import { Model } from 'miragejs'

import pacienteModel from './paciente.model'
import professorModel from './professor.model'

export default {
  paciente: pacienteModel,
  professores: professorModel,

  login: Model.extend({
    email: '',
    password: '',
  }),
}
