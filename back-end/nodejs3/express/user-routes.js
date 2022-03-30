const express = require('express')
const router = express.Router()

// formato:       app.METHOD(ROUTE, CALLBACK)
router.get('/users', function(req, res) {
    res.send(`Lista todos os usuários`)
});
 
router.post('/user', function(req, res) {
    res.send(`Inclui um usuário`)
});
 
router.put('/user/:id', function(req, res) {
    res.send(`Edita o usuário ${req.params.id}`)
    // o front envia o req com o final /user/10 para obter o usuário de id 10
});
 
router.delete('/user/:id', function(req, res) {
    res.send(`Exclui o usuário ${req.params.id}`)
    // o front envia o req com o final /user/10 para obter o usuário de id 10
})

module.exports = router