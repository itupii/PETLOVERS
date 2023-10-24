import Produto from "../components/models/produto";
import RemovedorLocal from "./removedorLocal";

export default class RemovedorProdutoLocal implements RemovedorLocal {
    public remover(objeto: Produto[], id: string): Produto[] {
      let Pets = objeto.filter(elemento => elemento.id !== id);
      return Pets;
    }
  }