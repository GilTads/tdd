import supertest from 'supertest'
import Server from '../server'

const request = supertest(Server)

test('Deve listar todos os usuários', async () => {
  const res = await request.get('/user')
  await expect(res.status).toBe(200)
  await expect(res.body).toHaveLength(1)
  await expect(res.body[0]).toHaveProperty('name', 'Gil')
})

test('Deve inserir um usuário com sucesso', async () => {
  const res = await request.post('/user').send({ name: 'Lu', email: 'lu@email.com' })
  await expect(res.status).toBe(201)
  await expect(res.body.name).toBe('Lu')
})
