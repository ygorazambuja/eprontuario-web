import { Server } from 'miragejs'

const pacienteSeeder = (server: Server) => {
  server.createList('paciente', 10)
}

export default function seeds(server: Server) {
  pacienteSeeder(server)
}
