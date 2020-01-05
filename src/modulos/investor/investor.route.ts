// Rotas (Caso existam) devem possuir um arquivo próprio para fácil identificação

  
import express from 'express'
import { validate, authorize } from './investor.middleware';
import { get, remove, post, patch, find } from './investor.controller';

const clienteRouter = express.Router()

clienteRouter.use(authorize)

// Não recebem dados pelo body
clienteRouter.get('/' ,find)
clienteRouter.get('/:id', get)
clienteRouter.delete('/:id', remove)

// Recebem dados pelo body, portanto possuem validação
clienteRouter.post('/', validate, post)
clienteRouter.patch('/:id', validate, patch)

export default clienteRouter