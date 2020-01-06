import { RequestHandler } from 'express'

/**
 * Todo módulo deve possuir a sua controller,
 * que será responsável por servir as funcionalidades
 * daquele módulo para fora
 * sem aplicar regras de negócio
 * 
 */ 

export const criar: RequestHandler = async (): Promise<string> => {
    return 'sucesso'
}

export const atualizar: RequestHandler = async (): Promise<string> => {
    return 'sucesso'
}

export const remover: RequestHandler = async (): Promise<string> => {
    return 'sucesso'
}

export const selecionar: RequestHandler = async (): Promise<string> => {
    return 'sucesso'
}

export const buscar: RequestHandler = async (): Promise<string> => {
    return 'sucesso'
}