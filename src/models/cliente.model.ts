// Modelo de cliente igual ao Banco de dados
// Cada modelo deve ter seu próprio arquivo, facilitando a busca, caso a quantidade de models comece a interferir na
// facilidade da busca, deve-se subdividir as mesmas em subpastas levando em conta seus devidos contextos
export interface ClienteModel {
    idCliente: number; // int, decimal
    nome: string; // Varchar, char
    nasc: Date; // timestamp, date, datetime
    ativo: boolean; // tyneint
    status: string
    created: Date;
    updated: Date;
}