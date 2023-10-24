import Produto from "../components/models/produto";
import { URI } from "../enuns/uri";
import RemovedorRemoto from "./removedorRemoto";

export default class RemovedorProduto implements RemovedorRemoto {
  public remover(objeto: Produto): Promise<Response> {
    let url = URI.DELETAR_PRODUTO + objeto.id; // Adiciona o ID ao final da URL
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
