// Modelo de cliente igual ao Banco de dados

export interface ClienteModel {
    idCliente: number; // int, decimal
    nome: string; // Varchar, char
    nasc: Date; // timestamp, date, datetime
    ativo: boolean; // tyneint
    status: string
    created: Date;
    updated: Date;
}