const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const PORT = 3000

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`)
})
