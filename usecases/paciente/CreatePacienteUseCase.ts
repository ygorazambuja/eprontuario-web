import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Paciente } from '~/interfaces'

export class CreatePacienteUseCase {
  constructor(
    protected paciente: Omit<Paciente, 'id'>,
    protected axios: NuxtAxiosInstance
  ) {
    this.paciente = paciente
    this.axios = axios
  }

  async execute(): Promise<Paciente | Error> {
    return await this.axios.post('api/pacientes', this.paciente)
  }
}
