const express = require('express')
const app = express()
const port = 3000

const userRoutes = require('./user-routes')
app.use('/', userRoutes)
const petRoutes = require('./pet-routes')
app.use('/', petRoutes)

// formato:       app.METHOD(ROUTE, CALLBACK)
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

