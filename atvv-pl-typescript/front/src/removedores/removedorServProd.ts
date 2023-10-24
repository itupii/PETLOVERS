import usuarioProdServ from "../components/models/usuarioProdServ";
import { URI } from "../enuns/uri";
import RemovedorRemoto from "./removedorRemoto";

export default class RemovedorusuarioProdServ implements RemovedorRemoto {
  public remover(objeto: usuarioProdServ): Promise<Response> {
    let url = URI.DELETAR_SERVPROD + objeto.id; // Adiciona o ID ao final da URL
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
