import { URI } from "../enuns/uri";
import Buscador from "./buscador";

export default class BuscadorProduto implements Buscador {
    public async buscar() {
        let json = await fetch(URI.PRODUTOS).then(resposta => resposta.json())
        return json
    }
}