import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroConsumoCliente from "../negocio/CadastroConsumoCliente";
import CadastroProdutos from "../negocio/CadastroProdutos";
import CadastroServicos from "../negocio/CadastroServicos";
import CadastroPet from "../negocio/CadastroPet";
import ListagemConsumoMais from "../negocio/ListagemConsumoMais";
import ListagemComusumoValor from "../negocio/ListagemConsumoValor";
import ListagemProdutos from "../negocio/ListagemProdutos";
import ListagemServicos from "../negocio/ListagemServicos";
import ListagemPets from "../negocio/listagemPet";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarProdutos from "../negocio/atualizarProduto";
import AtualizarServicos from "../negocio/atualizarServicos";
import AtualizarPet from "../negocio/atualizarPet";
import CadastroCliente from "../negocio/cadastroCliente";
import ExcluirCliente from "../negocio/deletarCliente";
import ExcluirProduto from "../negocio/deletarProduto";
import ExcluirServico from "../negocio/deletarServico";
import ExcluirPet from "../negocio/deletarPet";
import ListagemClientes from "../negocio/listagemClientes";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    // crud cliente
    console.log(`1  - Cadastrar cliente`);
    console.log(`2  - Listar todos os clientes`);
    console.log(`3  - Atualizar cliente existente`);
    console.log(`4  - Deletar cliente`);
    // crud pet
    console.log(`5  - Cadastrar pet`);
    console.log(`6  - Listar todos os pets`);
    console.log(`7  - Atualizar pet existente`);
    console.log(`8  - Deletar pet`);
    // crud produtos
    console.log(`9  - Cadastrar produto`);
    console.log(`10  - Listar todos os produtos`);
    console.log(`11  - Atualizar produto existente`);
    console.log(`12  - Deletar produto`);
    // crud servicos
    console.log(`13  - Cadastrar servico`);
    console.log(`14 - Listar todos os servicos`);
    console.log(`15 - Atualizar servico existente`);
    console.log(`16 - Deletar servico`);
    // listagens
    console.log(`17 - Registrar consumo por cliente`);
    console.log(`18 - Produtos ou serviços mais consumidos`);
    console.log(`19 - Clientes que mais consumiram em valor`);
    // out
    console.log(`0  - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizar = new AtualizarCliente(empresa.getClientes)
            atualizar.atualiza()
            break;
        case 4:
            let exclusao = new ExcluirCliente(empresa.getClientes)
            exclusao.Exclui()
            break;
        case 5:
            let cadastroPet = new CadastroPet(empresa.getPet)
            cadastroPet.cadastrar()
            break;
        case 6:
            let listagemPet = new ListagemPets(empresa.getPet)
            listagemPet.listar()
            break;
        case 7:
            let atualizarPet = new AtualizarPet(empresa.getPet)
            atualizarPet.atualiza()
            break;
        case 8:
            let exclusaoPet = new ExcluirPet(empresa.getPet)
            exclusaoPet.Exclui()
            break;
        case 9:
            let cadastrarProd = new CadastroProdutos(empresa.getProdutos)
            cadastrarProd.cadastrar()
            break;
        case 10:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;
        case 11:
            let atualizarProdutos = new AtualizarProdutos(empresa.getProdutos)
            atualizarProdutos.atualiza()
            break;
        case 12:
            let exclusaoProduto = new ExcluirProduto(empresa.getProdutos)
            exclusaoProduto.Exclui()
            break;
        case 13:
            let cadastrarServico = new CadastroServicos(empresa.getServicos)
            cadastrarServico.cadastrar()
            break
        case 14:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break
        case 15:
            let atualizaServico = new AtualizarServicos(empresa.getServicos)
            atualizaServico.atualiza()
            break
        case 16:
            let excluirServico = new ExcluirServico(empresa.getServicos)
            excluirServico.Exclui()
            break
        case 17:
            let cadastroConsumoCliente = new CadastroConsumoCliente(empresa.getClientes, empresa)
            cadastroConsumoCliente.cadastrar()
            break
        case 18:
            let top10_consum = new ListagemConsumoMais(empresa.getClientes)
            top10_consum.listar()
            break
        case 19:
            let top5_consum_valor = new ListagemComusumoValor(empresa)
            top5_consum_valor.listar()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}