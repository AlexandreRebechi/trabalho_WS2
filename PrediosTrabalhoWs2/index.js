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
const Predios_api = require('./controladores/Predios_api')

// importando o controle de segurança
const seguranca = require('./controladores/seguranca')

app
    .route('/api/Predios')
    .get(seguranca.verificaJWT, Predios_api.getPredios_api)
    .post(seguranca.verificaJWT, Predios_api.addPredios_api)
    .put(seguranca.verificaJWT, Predios_api.updatePredios_api)
app.route('/api/Predios/:id')
    .get(seguranca.verificaJWT, Predios_api.getPredios_apiPorID)
    .delete(seguranca.verificaJWT, Predios_api.deletePredios_api)

// rota do login
app
  .route("/api/login")
  .post(seguranca.login)   


app.listen(process.env.PORT || 3001, () => {
    console.log('Servidor rodando a API');
})
