import usuarioProdServ from "../components/models/usuarioProdServ";
import RemovedorLocal from "./removedorLocal";

export default class RemovedorusuarioProdServ implements RemovedorLocal {
    public remover(objeto: usuarioProdServ[], id: string): usuarioProdServ[] {
      let Pets = objeto.filter(elemento => elemento.id !== id);
      return Pets;
    }
  }