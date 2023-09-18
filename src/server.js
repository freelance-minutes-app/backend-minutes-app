const express = require('express')
const cors = require('cors')
const serverless = require('serverless-http')

require('dotenv').config()
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const PORT = process.env.PORT || 3005

app.get('/', (req, res) => {
  res.send('Hello, Glitch Over')
})

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`)
})
module.exports.handler = serverless(app)
