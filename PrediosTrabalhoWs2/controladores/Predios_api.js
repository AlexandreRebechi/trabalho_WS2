const { pool } = require('../config')
const { request, response, next } = require('express')

const getPredios_api = (request, response, next) => {
    pool.query('SELECT * FROM Predios', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// exportando a função para tornar visivel no index.js
module.exports.getPredios_api = getPredios_api;

const addPredios_api = (request, response, next) => {
    const {nome, numApartamentos, endereco,aluguel, preco } = request.body

    pool.query(
        'INSERT INTO Predios (nome, numApartamentos, endereco, aluguel, preco) values ($1, $2, $3, $4,$5)',
        [nome, numApartamentos, endereco, aluguel, preco],
        (error) => {
            if (error) {
                throw error
            }
            response.status(201).json({ status: 'success', message: 'Predios criado com sucesso' })
        }
    )
}

// exportando a função para tornar visivel no index.js
module.exports.addPredios_api = addPredios_api;

const updatePredios_api = (request, response, next) => {
    const {codigo, nome, numApartamentos, endereco, aluguel, preco} = request.body
   
    pool.query(
        'UPDATE Predios set nome = $1, numApartamentos = $2, endereco = $3, aluguel = $4, preco = $5 WHERE codigo = $6',
        [nome,numApartamentos,endereco,aluguel,preco,codigo],
        
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', message: 'Não foi possivel atualizar o produto' });
            }
            return response.status(201).json({ status: 'success', message: 'Produto atualizado com sucesso' })
        },
    )
   
}

// exportando a função para tornar visivel no index.js
module.exports.updatePredios_api = updatePredios_api;

const deletePredios_api = (request, response, next) => {
    const codigo = parseInt(request.params.id)
    console.log(codigo)
    pool.query(
        'DELETE from Predios where codigo=$1',
        [codigo],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', message: 'Não foi possivel remover o produto' });
            }
            response.status(201).json({ status: 'success', message: 'Produto removido com sucesso' })
        },
    )
}

// exportando a função para tornar visivel no index.js
module.exports.deletePredios_api = deletePredios_api;

const getPredios_apiPorID = (request, response, next) => {
    const codigo = parseInt(request.params.id)
    pool.query('SELECT * FROM Predios where codigo = $1', [codigo], (error, results) => {
        if (error || results.rowCount == 0) {
            return response.status(401).json({ status: 'error', message: 'Não foi possivel recuperar o produto' });
        }
        response.status(200).json(results.rows)
    })
}

// exportando a função para tornar visivel no index.js
module.exports.getPredios_apiPorID = getPredios_apiPorID;
