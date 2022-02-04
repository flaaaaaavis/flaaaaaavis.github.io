const express = require("express");
const app = express();
const PORT = 8080; //rodar back em outra
 
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`)
});


