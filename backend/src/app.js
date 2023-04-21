const express = require('express');
const app = express();
const router = require('./router'); // importa o router para cá


app.use(express.json()); // permite que sejam retornados JSONs dentro da API
app.use(router); // utilizará o arquivo router para acessar as rotas para as requisições

// permite a exportação desse arquivo para outros arquivos
module.exports = app;
