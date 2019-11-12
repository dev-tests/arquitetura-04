// Modelo de Carro igual ao Banco de dados
// Cada modelo deve ter seu próprio arquivo, facilitando a busca, caso a quantidade de models comece a interferir na
// facilidade da busca, deve-se subdividir as mesmas em subpastas levando em conta seus devidos contextos

export interface CarroModel {
    idCarro: number; // int, decimal
    carroNome: string; // Varchar, char
    created: Date;
    updated: Date;
}