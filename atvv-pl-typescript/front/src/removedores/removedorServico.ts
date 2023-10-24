import Servico from "../components/models/servico";
import { URI } from "../enuns/uri";
import RemovedorRemoto from "./removedorRemoto";

export default class RemovedorServico implements RemovedorRemoto {
  public remover(objeto: Servico): Promise<Response> {
    let url = URI.DELETAR_SERVICO + objeto.id; // Adiciona o ID ao final da URL
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
