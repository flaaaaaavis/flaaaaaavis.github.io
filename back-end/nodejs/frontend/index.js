const express = require('express')
const app = express()
// const enviar = require('./submit.js');
const port = 3000

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})