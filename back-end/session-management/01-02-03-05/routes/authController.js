const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()
const fs = require('fs')
const path = require('path')

let usersTable = JSON.parse(fs.readFileSync(path.join(__dirname, '/database.json'), 'utf8'))
// {
//   "email@email.com": ['name', 'userType', 'hashedPass'],
//   "email2@email.com": ['name2', 'userType2', 'hashedPass2']
// }

const sessionController = require('./sessionController')
const sessionControl = sessionController.sessionControl
const table = sessionController.sessionTable

class Auth {
  createToken (_token) {
    const token = jwt.sign({ _token }, process.env.SECRET, {
      expiresIn: '24h'
    })
    return { token }
  }

  async validateToken (req) {
    const cookieToken = req.cookies.token

    try {
      if (cookieToken) {
        const result = jwt.verify(cookieToken, process.env.SECRET)
        if (result) return true
        else return false
      } else if (cookieToken === undefined) return false
      else {
        if (req.url === '/signIn' || req.url === '/register') return true
        else return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  createUser (req, res) {
    const { name, email, password, userType } = req.body
    const saltRounds = 12
    let hashedPass

    bcrypt.hash(password, saltRounds).then(async (hash) => {
      hashedPass = `${hash}`
      if(usersTable[`${email}`] === undefined) {
        usersTable[`${email}`] = [`${name}`, `${userType}`, `${hashedPass}`]
        fs.writeFileSync(path.join(__dirname, '/database.json'), JSON.stringify(usersTable))

        const string = `${email}`
        const { token } = this.createToken(string) // cria um token novo
        res.cookie('token', token, {
          HttpOnly: true,
          Secure: true,
          overwrite: true
        })
        sessionControl.createSession(token, email) // guarda o token
        res.status(201).send({ message: 'Created' })
      } else {
        res.status(100).send({ message: 'User already exists' })
      }
    })
  }

  async login (req, res) {
    const { email, password } = req.body
    const testToken = await this.validateToken(req)

    try {
      if (usersTable[`${email}`] !== undefined) { // se já tiver cadastro
        bcrypt.compare(password, usersTable[`${email}`]).then((result) => {
          if (result && !testToken) { // se a senha estiver certa, mas não tiver token
            const string = `${email}`
            const { token } = this.createToken(string) // cria um token novo
            res.cookie('token', token, {
              HttpOnly: true,
              Secure: true,
              overwrite: true
            })
            sessionControl.createSession(token, email) // guarda o token
            res.status(200).send({ message: 'Created token. Logged in' })
          } else if (result && testToken) { // se a senha estiver certa e tiver token
            res.status(200).send({ message: 'Valid token. Logged in' })
          } else {
            res.status(401).send({ message: 'Wrong password, try again' })
          }
        })
      } else res.status(401).send({ message: 'User not found' })
    } catch (err) {
      console.log(err)
      res.status(401).send({ message: 'Try again' }).end()
    }
  }

  async logout (req, res) {
    const cookieToken = req.cookies.token
    const tableToken = sessionControl.findSession(cookieToken)

    if (tableToken !== undefined && tableToken !== null) {
      try {
        sessionControl.deleteSession(cookieToken)
        res.cookie('token', '', {
          HttpOnly: true,
          Secure: true,
          overwrite: true
        })
        res.status(201).send({ message: 'Logged out' })
      } catch (error) {
        console.log(error)
        res.status(401)
      }
      // console.log(table)
    } else {
      res.status(401)
    }
  }
}

const authControl = new Auth()

module.exports = authControl
