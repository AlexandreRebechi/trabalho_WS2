var http = require('http')
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
var cookieParser = require('cookie-parser')
var looger = require('morgan')
const helmet = require('helmet')

const LojaAutomoveisTrabalhoWs2ServiceProxy = httpProxy('http://localhost:3002')
const PrediosServiceProxy = httpProxy('http://localhost:3003')


app.all('(/*)LojaA(/*)?', LojaAutomoveisTrabalhoWs2ServiceProxy);
app.all('(/*)Predios(/*)?',  PrediosServiceProxy);


app.use(looger('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser())

var server = http.createServer(app)
server.listen(3000)