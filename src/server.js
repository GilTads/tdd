import app from './app'

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(3000)
