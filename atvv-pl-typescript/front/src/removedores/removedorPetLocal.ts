import Pet from "../components/models/pet";
import RemovedorLocal from "./removedorLocal";

export default class RemovedorPetLocal implements RemovedorLocal {
    public remover(objeto: Pet[], id: string): Pet[] {
      let Pets = objeto.filter(elemento => elemento.id !== id);
      return Pets;
    }
  }