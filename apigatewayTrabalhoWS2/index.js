var http = require('http')
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
var cookieParser = require('cookie-parser')
var looger = require('morgan')
const helmet = require('helmet')
app.use(express.json())
const LojaAutomoveisTrabalhoWs2ServiceProxy = httpProxy('http://localhost:3002')
const PrediosServiceProxy = httpProxy('http://localhost:3001')
// importando o controle de segurança
const seguranca = require('./controladores/seguranca')

// rota do login
app.post('/api/login', seguranca.login);
app.all('/LojaA(/*)?',seguranca.verificaJWT, LojaAutomoveisTrabalhoWs2ServiceProxy);
app.all('/Predios(/*)?',seguranca.verificaJWT,  PrediosServiceProxy);


   

app.use(looger('dev'))
app.use(helmet())

app.use(express.urlencoded({extended : false}))
app.use(cookieParser())

var server = http.createServer(app)
server.listen(3000)