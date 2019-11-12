// Modelo de cliente igual ao Banco de dados

export interface CarroModel {
    idCarro: number; // int, decimal
    carroNome: string; // Varchar, char
    created: Date;
    updated: Date;
}