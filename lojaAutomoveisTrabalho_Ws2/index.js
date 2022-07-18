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



app
    .route('/LojaA')
    .get( lojaAutomoveis.getLojaAutomoveisTrabalhoWs2)
    .post( lojaAutomoveis.addLojaAutomoveisTrabalhoWs2)
    .put( lojaAutomoveis.updateLojaAutomoveisTrabalhoWs2)
app.route('/LojaA/:id')
    .get( lojaAutomoveis.getLojaAutomoveisTrabalhoWs2PorID)
    .delete( lojaAutomoveis.deleteProduto)



app.listen(process.env.PORT || 3002, () => {
    console.log('Servidor rodando a API');
})
