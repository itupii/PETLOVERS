import { URI } from "../enuns/uri";
import Cadastrador from "./cadastrador";

class CadastradorCliente implements Cadastrador {
    cadastrar(objeto: Object): void {
        try {
            fetch(URI.CADASTRAR_CLIENTE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objeto)
            });
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            // Aqui você pode adicionar tratamento adicional para lidar com o erro de rede
        }
    }
}

export default CadastradorCliente;
