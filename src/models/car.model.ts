// Modelo de Carro igual ao Banco de dados
// Cada modelo deve ter seu próprio arquivo

export interface CarroModel {
    idCarro: number; // int, decimal
    carroNome: string; // Varchar, char
    created: Date;
    updated: Date;
}