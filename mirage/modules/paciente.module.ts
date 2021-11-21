// @ts-nocheck

import { Response } from 'miragejs'

export default function pacientes() {
  this.get('pacientes', (schema: unknown) => {
    return schema.db.pacientes
  })

  this.get('pacientes/:id', (schema, request) => {
    const id = request.params.id
    return schema.db.pacientes.findBy({ id })
  })

  this.post('pacientes', (schema: unknown, { requestBody }) => {
    const paciente = JSON.parse(requestBody)

    const existsPaciente = schema.db.pacientes.findBy({ cpf: paciente.cpf })

    if (existsPaciente) {
      return new Response(400, {}, { errors: ['Paciente já existe'] })
    }

    const pacienteCreated = schema.db.pacientes.insert(paciente)

    return new Response(
      201,
      {},
      {
        data: {
          ...pacienteCreated,
        },
      }
    )
  })
}
