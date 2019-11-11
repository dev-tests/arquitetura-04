import { ClienteModel } from "../../models/cliente.model";

export type Cliente = Pick<ClienteModel, 'ativo' | 'nasc' | 'nome' | 'idCliente' | 'status'>
