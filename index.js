import express from 'express'

const app = express()

app.get('/', (req, res) => {
  console.log('I\'m getting a get request from somewhere')
  res.send('this is ok too')
})

app.listen(8080, () => {
  console.log('Im listening in 8080!')
})