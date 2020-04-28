import { IEndereco } from '../interfaces/IEndereco';

export default class Endereco implements IEndereco {
    id: string;    
    rua: string;
    latitude: any;
    longitude: any;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    sigla: string;

    constructor(obj?) {
        if (obj) {
            this.id = obj.id;
            this.rua = obj.rua;
            this.latitude = obj.latitude;
            this.longitude = obj.longitude
            this.numero = obj.numero;
            this.complemento = obj.complemento;
            this.bairro = obj.bairro;
            this.cidade = obj.cidade;
            this.estado = obj.estado;
            this.sigla = obj.sigla;
        }
    }
}