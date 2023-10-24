import Cliente from "../components/models/cliente";
import { URI } from "../enuns/uri";
import RemovedorRemoto from "./removedorRemoto";

export default class RemovedorCliente implements RemovedorRemoto {
    public remover(objeto: Cliente): void {
      let json = { id: objeto.id };
      fetch(URI.DELETAR_CLIENTE, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
      });
    }
  }
  