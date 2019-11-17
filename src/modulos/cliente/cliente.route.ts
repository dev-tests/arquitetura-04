// Rotas (Caso existam) devem possuir um arquivo próprio para fácil identificação

  
import express from 'express'
import { validar } from './cliente.middleware'
import { buscar, editar, deletar, criar } from './cliente.controller';

const clienteRouter = express.Router()

// Não recebem dados pelo body
clienteRouter.get('/', buscar)
clienteRouter.delete('/:id' , deletar)

// Recebem dados pelo body, portanto possuem validação
clienteRouter.post('/', validar ,criar)
clienteRouter.patch('/:id', validar,editar)

export default clienteRouter