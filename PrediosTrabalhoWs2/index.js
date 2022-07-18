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



app
    .route('/Predios')
    .get(Predios_api.getPredios_api)
    .post(Predios_api.addPredios_api)
    .put(Predios_api.updatePredios_api)
app.route('/Predios/:id')
    .get( Predios_api.getPredios_apiPorID)
    .delete(Predios_api.deletePredios_api)



app.listen(process.env.PORT || 3001, () => {
    console.log('Servidor rodando a API');
})
