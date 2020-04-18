import supertest from 'supertest'

const request = supertest('http://localhost:3000')

test('Deve responder na porta 3000', async () => {
  // Acessar a url http://localhost:3000
  const data = await request.get('/')
  expect(data.status).toBe(400)
  // Devo verificar se a resposta foi 200
})
