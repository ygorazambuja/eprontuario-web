// @ts-nocheck
import { Response } from 'miragejs'

export default function login() {
  this.post('login', (schema, request) => {
    const requestBody = JSON.parse(request.requestBody)
    if (requestBody.email === 'teste@gmail.com')
      return new Response(400, {}, { errors: ['Usuário já existe'] })
    return new Response(
      200,
      {},
      { token: '123', user: { id: 1, username: 'joaozinho' } }
    )
  })
}
