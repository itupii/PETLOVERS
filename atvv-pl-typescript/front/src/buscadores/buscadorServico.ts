import { URI } from "../enuns/uri";
import Buscador from "./buscador";

export default class BuscadorServico implements Buscador {
    public async buscar() {
        let json = await fetch(URI.SERVICOS).then(resposta => resposta.json())
        return json
    }
}