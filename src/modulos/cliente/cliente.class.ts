import { Cliente } from "./cliente";

export class ClienteImp implements Cliente {
    ativo: boolean
    idCliente: number
    nasc: Date
    nome: string
    status: string

    constructor(cliente: Cliente) {
      this.ativo= cliente.ativo
      this.idCliente= cliente.idCliente
      this.nasc = cliente.nasc 
      this.nome = cliente.nome
    }
}