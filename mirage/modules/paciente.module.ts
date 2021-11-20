// @ts-nocheck

export default function pacientes() {
  this.get('pacientes', (schema: unknown) => {
    return schema.db.pacientes
  })

  this.get('pacientes/:id', (schema, request) => {
    const id = request.params.id
    return schema.db.pacientes.findBy({ id })
  })
}
