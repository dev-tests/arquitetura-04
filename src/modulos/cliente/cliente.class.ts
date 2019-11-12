import { ClienteModel } from '../../models/cliente.model';
import { CarroModel } from '../../models/carro.model';

export class ClienteAndCarImp implements Partial<ClienteModel>, Partial<CarroModel> {
    ativo: boolean
    idCliente: number
    nasc: Date
    nome: string
    status: string
    carroNome: string
    idCarro: number
}