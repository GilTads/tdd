import supertest from 'supertest'
// import server from '../src/server'

const request = supertest('http://localhost:3000')

test('Deve responder na porta 3000', async () => {
  const data = await request.get('/')
  await expect(data.status).toBe(200)
})
