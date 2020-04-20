import supertest from 'supertest'
import app from '../src/app'

const request = supertest(app)

test('Deve listar todos os usuários', async () => {
  const res = await request.get('/users')
  await expect(res.status).toBe(200)
  await expect(res.body).toHaveLength(1)
  await expect(res.body[0]).toHaveProperty('name', 'Gil')
})

test('Deve inserir um usuário com sucesso', async () => {
  const res = await request.post('/users').send({ name: 'Lu', email: 'lu@email.com' })
  await expect(res.status).toBe(201)
  await expect(res.body.name).toBe('Lu')
})
