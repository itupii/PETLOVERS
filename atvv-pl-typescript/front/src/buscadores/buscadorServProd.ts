import { URI } from "../enuns/uri";
import Buscador from "./buscador";

export default class BuscadorServProd implements Buscador {
    public async buscar() {
        let json = await fetch(URI.SERVPROD).then(resposta => resposta.json())
        return json
    }
}