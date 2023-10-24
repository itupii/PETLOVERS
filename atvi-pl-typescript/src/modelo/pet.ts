export default class Pet {
    public nome!: string
    public tipo: string
    public raca: string
    public genero: string
    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
    }

    public getNome(): string {
        return this.nome
    }
    public getRaca(): string {
        return this.raca
    }
    public getGenero(): string {
        return this.genero
    }
    public getTipo(): string {
        return this.tipo
    }
}
