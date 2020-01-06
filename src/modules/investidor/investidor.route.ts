// Rotas (Caso existam) devem possuir um arquivo próprio para fácil identificação


import express from 'express'
import { validar, autorizar } from './investidor.middleware';
import { buscar, remover, criar, atualizar, selecionar } from './investidor.controller';

const clienteRouter = express.Router()

clienteRouter.use(autorizar)

// Não recebem dados pelo body
clienteRouter.get('/', buscar)
clienteRouter.get('/:id', selecionar)
clienteRouter.delete('/:id', remover)

// Recebem dados pelo body, portanto possuem validação
clienteRouter.post('/', validar, criar)
clienteRouter.patch('/:id', validar, atualizar)

export default clienteRouter