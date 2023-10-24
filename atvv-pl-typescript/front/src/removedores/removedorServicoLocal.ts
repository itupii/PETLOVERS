import Servico from "../components/models/servico";
import RemovedorLocal from "./removedorLocal";

export default class RemovedorServicoLocal implements RemovedorLocal {
    public remover(objeto: Servico[], id: string): Servico[] {
      let Servicos = objeto.filter(elemento => elemento.id !== id);
      return Servicos;
    }
  }