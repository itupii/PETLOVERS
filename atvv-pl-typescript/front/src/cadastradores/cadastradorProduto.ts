import { URI } from "../enuns/uri";
import Cadastrador from "./cadastrador";

class CadastradorProduto implements Cadastrador {
    cadastrar(objeto: Object): void {
        try {
            fetch(URI.CADASTRAR_PRODUTO, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objeto)
            });
        } catch (error) {
            console.error('Erro ao cadastrar Produto:', error);
            // Aqui você pode adicionar tratamento adicional para lidar com o erro de rede
        }
    }
}

export default CadastradorProduto;
