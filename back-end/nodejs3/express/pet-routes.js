const express = require('express')
const router = express.Router()

// formato:       app.METHOD(ROUTE, CALLBACK)
router.get('/pets', function(req, res) {
    res.send(`Lista todos os pets`)
});
 
router.post('/pets', function(req, res) {
    res.send(`Inclui um pet`)
});
 
router.put('/pets/:id', function(req, res) {
    res.send(`Edita o pet ${req.params.id}`)
    // o front envia o req com o final /user/10 para obter o usuário de id 10
});
 
router.delete('/pets/:id', function(req, res) {
    res.send(`Exclui o pet ${req.params.id}`)
    // o front envia o req com o final /user/10 para obter o usuário de id 10
})

module.exports = router