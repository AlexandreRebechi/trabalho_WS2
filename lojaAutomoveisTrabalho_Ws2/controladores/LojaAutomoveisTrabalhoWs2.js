const { pool } = require('../config')
const { request, response, next } = require('express')

const getLojaAutomoveisTrabalhoWs2 = (request, response, next) => {
    pool.query('SELECT * FROM LojaAutomoveisTrabalhoWs2', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// exportando a função para tornar visivel no index.js
module.exports.getLojaAutomoveisTrabalhoWs2 = getLojaAutomoveisTrabalhoWs2;

const addLojaAutomoveisTrabalhoWs2 = (request, response, next) => {
    const { nomeCarro, nomeMarca, preco,anoFabricacao} = request.body

    pool.query(
        'INSERT INTO LojaAutomoveisTrabalhoWs2 (nomeCarro, nomeMarca, preco,anoFabricacao) values ($1, $2, $3, $4)',
        [nomeCarro, nomeMarca, preco,anoFabricacao],
        (error) => {
            if (error) {
                throw error
            }
            response.status(201).json({ status: 'success', message: 'Produto criado com sucesso' })
        }
    )
}

// exportando a função para tornar visivel no index.js
module.exports.addLojaAutomoveisTrabalhoWs2 = addLojaAutomoveisTrabalhoWs2;

const updateLojaAutomoveisTrabalhoWs2 = (request, response, next) => {
    const { id, nomeCarro, nomeMarca, preco,anoFabricacao } = request.body
    pool.query(
        'UPDATE LojaAutomoveisTrabalhoWs2 set nomeCarro = $1, nomeMarca=$2, preco = $3, anoFabricacao = $4  where id=$5',
        [nomeCarro, nomeMarca, preco,anoFabricacao, id],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', message: 'Não foi possivel atualizar o produto' });
            }
            return response.status(201).json({ status: 'success', message: 'Produto atualizado com sucesso' })
        },
    )
}

// exportando a função para tornar visivel no index.js
module.exports.updateLojaAutomoveisTrabalhoWs2 = updateLojaAutomoveisTrabalhoWs2;

const deleteProduto = (request, response, next) => {
    const id = parseInt(request.params.id)
    console.log(id)
    pool.query(
        'DELETE from LojaAutomoveisTrabalhoWs2 where id=$1',
        [id],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', message: 'Não foi possivel remover o produto' });
            }
            response.status(201).json({ status: 'success', message: 'Produto removido com sucesso' })
        },
    )
}

// exportando a função para tornar visivel no index.js
module.exports.deleteProduto = deleteProduto;

const getLojaAutomoveisTrabalhoWs2PorID = (request, response, next) => {
    const id = parseInt(request.params.id)
    console.log(id)
    pool.query('SELECT * FROM LojaAutomoveisTrabalhoWs2 where id = $1', [id], (error, results) => {
        if (error || results.rowCount == 0) {
            return response.status(401).json({ status: 'error', message: 'Não foi possivel recuperar o produto' });
        }
        response.status(200).json(results.rows)
    })
}

// exportando a função para tornar visivel no index.js
module.exports.getLojaAutomoveisTrabalhoWs2PorID = getLojaAutomoveisTrabalhoWs2PorID;
