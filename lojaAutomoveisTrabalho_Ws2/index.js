const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()



// Parte da segurança
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded()); 
app.use(cors())

// importanto o controle de LojaAutomoveisTrabalhoWs2
const lojaAutomoveis = require('./controladores/LojaAutomoveisTrabalhoWs2')

// importando o controle de segurança
const seguranca = require('./controladores/seguranca')

app
    .route('/api/LojaA')
    .get(seguranca.verificaJWT, lojaAutomoveis.getLojaAutomoveisTrabalhoWs2)
    .post(seguranca.verificaJWT, lojaAutomoveis.addLojaAutomoveisTrabalhoWs2)
    .put(seguranca.verificaJWT, lojaAutomoveis.updateLojaAutomoveisTrabalhoWs2)
app.route('/api/LojaA/:id')
    .get(seguranca.verificaJWT, lojaAutomoveis.getLojaAutomoveisTrabalhoWs2PorID)
    .delete(seguranca.verificaJWT, lojaAutomoveis.deleteProduto)

// rota do login
app
  .route("/api/login")
  .post(seguranca.login)   


app.listen(process.env.PORT || 3002, () => {
    console.log('Servidor rodando a API');
})
