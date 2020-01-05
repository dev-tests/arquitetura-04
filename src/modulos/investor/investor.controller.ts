import { RequestHandler } from 'express'

/**
 * Todo módulo deve possuir a sua controller,
 * que será responsável por servir as funcionalidades
 * daquele módulo para fora
 * sem aplicar regras de negócio
 * 
 */ 

export const post: RequestHandler = async (): Promise<string> => {
    return 'sucesso'
}

export const patch: RequestHandler = async (): Promise<string> => {
    return 'sucesso'
}

export const remove: RequestHandler = async (): Promise<string> => {
    return 'sucesso'
}

export const get: RequestHandler = async (): Promise<string> => {
    return 'sucesso'
}

export const find: RequestHandler = async (): Promise<string> => {
    return 'sucesso'
}