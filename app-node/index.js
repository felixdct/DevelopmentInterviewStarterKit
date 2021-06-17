const express = require('express');
const app = express();
require('dotenv').config();
const apiPort = process.env.API_PORT;

app.get('/', (req, res) => {
    res.send('')
})
  
app.listen(apiPort, () => console.log(`Listenning at port ${apiPort}`))