const express = require('express');
const app = express();
const port = 8080;
// bring in routes
const { getParams } = require('./routes/post.js')


app.get("/", getParams);

app.listen(port, () => {
    console.log(`A node JS API is listening on port: ${port}`);
})