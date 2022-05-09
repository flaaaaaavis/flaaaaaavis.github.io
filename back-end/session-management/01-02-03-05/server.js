const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

app.use(express.json())
app.use( express.urlencoded({ extended: true }) )

app.use(express.static(path.join(__dirname, 'frontend')))

app.use(cors())
app.use(express.json())
app.use(cookieParser())

const authControl = require('./routes/authController')
const displayControl = require('./routes/displayController')
const res = require('express/lib/response')

app.get('/', async (req) => {
  const token = await authControl.validateToken(req)
  if(token) {
    express.static( path.join(__dirname, 'frontend') )
  } else res.send('Eita')
})

app.post('/signIn', (req, res) => {
  authControl.login(req, res)
})

app.post('/register', (req, res) => {
  authControl.createUser(req, res)
})

app.listen(port, console.log(`app listening on port ${port}`))
