// @ts-nocheck

export default function pacientes() {
  this.get('pacientes', (schema: unknown) => {
    return schema.db.pacientes
  })
}
