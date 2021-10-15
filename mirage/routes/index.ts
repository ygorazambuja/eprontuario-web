export default function routes() {
  this.get('pacientes', (schema: unknown) => {
    return schema.db.pacientes
  })
}
