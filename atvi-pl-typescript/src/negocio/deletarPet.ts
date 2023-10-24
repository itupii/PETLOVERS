import Entrada from "../io/entrada";
import Pet from "../modelo/pet";
import Excluir from "./deletar";

let executa = true

export default class ExcluirPet extends Excluir {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }

    public Exclui(): void {
        console.log(`\nInício da Exclusão do pet`);
        executa = true
        while (executa) {
            let busca = this.entrada.receberTexto(`Por favor informe o nome do pet: `);
            let cont = 1
            this.pets.forEach(pet => {
                if (pet.nome == busca) {
                    console.log(`pet encontrado, deseja realmente excluir o pet?`);
                    let confirma = this.entrada.receberNumero(`1 - excluir, 2 - cancelar: `)
                    switch (confirma) {
                        case 1:
                            let indice = this.pets.indexOf(pet)
                            this.pets.splice(indice, 1)
                            console.log(`pet excluido!`);
                            executa = false
                            break;
                        case 2:
                            executa = false
                            console.log(`cancelado`);
                            break;

                    }
                }
                else if (cont == this.pets.length) {
                    console.log(`\n nenhum pet encontrado com o nome informado!!! \n`);
                    executa = false
                }
                else {
                    cont++
                }
            })


        }
    }

}