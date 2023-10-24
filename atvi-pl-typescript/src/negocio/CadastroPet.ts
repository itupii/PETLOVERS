import Entrada from "../io/entrada";
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";

export default class CadastroPets extends Cadastro {
    private nomes: Array<Pet>
    private entrada: Entrada
    constructor(nome: Array<Pet>) {
        super()
        this.nomes = nome
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe a raca do pet: `)
        let genero = this.entrada.receberTexto(`Por favor informe o genero do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        let pet = new Pet(nome, raca, genero, tipo);
        //produto.nome = nome
        this.nomes.push(pet)
        console.log(`\nCadastro concluído :)\n`);
    }
}

