const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log("app listening on port 3000.")
})

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './public/' })
})

app.get('/random-num', (req, res) => {
    let timeOut = Math.floor(Math.random() * (5000 - 0)) + 0;
    setTimeout(() => {
        let number = Math.random();
        res.send(number.toString());
    }, timeOut)
    console.log(`O delay foi de ${timeOut} milissegundos`)
})

// new Promise( (resolve, reject) => 
//     setTimeout(() => {
//         if() {resolve('promise 1 resolved')}
//         else {reject('fail')}
//     }, 3000)
// )
