import { URI } from "../enuns/uri";
import Buscador from "./buscador";

export default class BuscadorPet implements Buscador {
    public async buscar() {
        let json = await fetch(URI.PETS).then(resposta => resposta.json())
        return json
    }
}