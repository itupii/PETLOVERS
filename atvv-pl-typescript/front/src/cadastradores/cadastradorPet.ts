import { URI } from "../enuns/uri";
import Cadastrador from "./cadastrador";

class CadastradorPet implements Cadastrador {
    cadastrar(objeto: Object): void {
        try {
            fetch(URI.CADASTRAR_PET, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objeto)
            });
        } catch (error) {
            console.error('Erro ao cadastrar Pet:', error);
            // Aqui você pode adicionar tratamento adicional para lidar com o erro de rede
        }
    }
}

export default CadastradorPet;
