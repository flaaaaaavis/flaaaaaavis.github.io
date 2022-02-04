const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let cliente;
let funcionarios = [];

app.use('/employee', (req, res, next) => {
    const {nome, matric, ramal, email, setor, nasc} = req.body;
    cliente = {nome, matric, ramal, email, setor, nasc};
    funcionarios.push(cliente);
    console.log(funcionarios);
    res.redirect('http://localhost:8080/');
})

app.listen(port, () => {
  console.log("Started on PORT 3000");
})

app.use(cors());