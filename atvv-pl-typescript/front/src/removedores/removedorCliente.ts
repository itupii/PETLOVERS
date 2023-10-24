import Cliente from "../components/models/cliente";
import { URI } from "../enuns/uri";
import RemovedorRemoto from "./removedorRemoto";

export default class RemovedorCliente implements RemovedorRemoto {
  public remover(objeto: Cliente): Promise<Response> {
    let url = URI.DELETAR_CLIENTE + objeto.id; // Adiciona o ID ao final da URL
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
