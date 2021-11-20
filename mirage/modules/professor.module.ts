export default function professores() {
  this.get('professores', (schema) => {
    return schema.db.professors
  })

  this.get('professores/:id', (schema, request) => {
    return schema.db.professors.findBy({ id: request.params.id })
  })
}
