import supertest from 'supertest'
import Server from '../../server'

const request = supertest(Server)

test('Deve listar todos os usuários', async () => {
  const res = await request.get('/user')
  await expect(res.status).toBe(200)
  await expect(res.body.length).toBeGreaterThan(0)
})

test('Deve inserir um usuário com sucesso', async () => {
  const email = `${Date.now()}@email.com`
  const res = await request.post('/user')
    .send({
      name: 'Lu',
      email,
      password: '123456'
    })
  await expect(res.status).toBe(201)
  await expect(res.body.name).toBe('Lu')
})

test('não deve inserir usuário sem nome', async () => {
  const response = await request.post('/user')
    .send({ email: 'email@email.com', password: '123456' })
  expect(response.status).toBe(400)
  // console.log(response.body)

  expect(response.body).toBe('Nome é um atributo obrigatório')
})
