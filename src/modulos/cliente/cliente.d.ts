// Caso a quantidade de tipos e/ou interfaces comece a crescer, as mesmas devem ser movidos para um arquivo de definicão como esse

export type Primitivo = number | string | boolean
export type NaoPrimitivo = object | Array<unknown> | unknown[] | Function

export interface Registro {
    data: Date
    texto: string
    IdDono: number
}

