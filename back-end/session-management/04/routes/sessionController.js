// sessionModel = { sessionId: '', userId: '' }

// let table = [
//     {
//         sessionId: '',
//         userId: ''
//     },
//     {
//         sessionId: '',
//         userId: ''
//     }
// ]

const sessionTable = []

class Session {
  async createSession (token, email) {
    sessionTable.push({
      sessionId: `${token}`,
      email: `${email}`
    })
  }

  async findSession (token) {
    const sessionIndex = sessionTable.findIndex(element => element.sessionId === token)
    return sessionIndex
  }

  async deleteSession (token) {
    const sessionIndex = sessionTable.findIndex(element => element.sessionId === token)
    sessionTable.pop(sessionIndex)
  }
}

const sessionControl = new Session()

module.exports = { sessionControl, sessionTable }
