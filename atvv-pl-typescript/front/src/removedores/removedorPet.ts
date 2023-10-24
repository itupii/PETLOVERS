import Pet from "../components/models/pet";
import { URI } from "../enuns/uri";
import RemovedorRemoto from "./removedorRemoto";

export default class RemovedorPet implements RemovedorRemoto {
  public remover(objeto: Pet): Promise<Response> {
    let url = URI.DELETAR_PET + objeto.id; // Adiciona o ID ao final da URL
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
