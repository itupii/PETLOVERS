export default class Endereco {
    estado!: string
    cidade!: string
    bairro!: string
    rua!: string
    numero!: string
    id!: number

    constructor(estado: string, cidade: string, bairro: string, rua: string, numero: string){
        this.estado = estado
        this.cidade = cidade
        this.bairro = bairro
        this.rua = rua
        this.numero = numero
    }
}