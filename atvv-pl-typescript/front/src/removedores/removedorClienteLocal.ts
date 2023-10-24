import Cliente from "../components/models/cliente";
import RemovedorLocal from "./removedorLocal";

export default class RemovedorClienteLocal implements RemovedorLocal {
    public remover(objeto: Cliente[], id: string): Cliente[] {
      let clientes = objeto.filter(elemento => elemento.id !== id);
      return clientes;
    }
  }