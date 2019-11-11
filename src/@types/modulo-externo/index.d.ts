// Exemplo de tipagem de um módulo externo

declare module 'modulo-externo' {
    type Somar = (valor: number) => number
    type Calculo = {
        numero1: number;
        numbero2: number;
        executado: boolean;
    }
    interface Somas {
        qtd: number;
        resultados: number[]
    }
}