import Entrada from "../io/entrada";
import Pet from "../modelo/pet";
import Atualizar from "./atualizar";

export default class AtualizarPets extends Atualizar {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }
    public atualiza(): void {
        let cont = 1
        console.log(`\nInício da atualização do pet`);
        let busca = this.entrada.receberTexto(`Por favor informe o nome do pet: `);
        this.pets.forEach(pet => {
            if (pet.nome == busca) {
                console.log(`pet encontrado, forneça as informações!`);
                let nome = this.entrada.receberTexto(`Por favor informe o novo nome do pet: `)
                pet.nome = nome

                console.log(`\nCadastro atualizado :)\n`);
            }
            else if (cont == this.pets.length) {
                console.log(`\n nenhum pet encontrado com o nome informado!!! \n`);
            }
            else {
                cont++
            }

        })


    }
}