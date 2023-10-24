import React, { ReactElement } from 'react';
import Appbar from '../components/Appbar';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import M from 'materialize-css';
import CSS from 'csstype'
import BuscadorProdutos from '../buscadores/buscadorProduto';
import RemovedorProduto from '../removedores/removedorProduto';
import RemovedorProdutoLocal from '../removedores/removedorProdutoLocal';
import Produto from '../components/models/produto';

import BuscadorServicos from '../buscadores/buscadorServico';
import RemovedorServico from '../removedores/removedorServico';
import RemovedorServicoLocal from '../removedores/removedorServicoLocal';
import Servico from '../components/models/servico';

type State = {
    Produtos: Produto[],
    Servicos: Servico[]
}

const titulo: CSS.Properties = {
    marginTop: "70px",
    textAlign: "center"
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Nome', width: 150, editable: true },
    { field: 'preco', headerName: 'Preço', width: 150 },
    { field: 'descricao', headerName: 'Descrição', width: 190 },
    { field: 'consumo', headerName: 'Consumo', width: 190 },
]
columns.push({ field: 'tipo', headerName: 'Tipo', width: 150 });

class ListagensProduto extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = { Servicos: [], Produtos: [] }
    }

    public buscarProdutos() {
        let buscadorProdutos = new BuscadorProdutos()
        const Produtos = buscadorProdutos.buscar()
        Produtos.then((Produtos) => {
            this.setState({ Produtos: Produtos })
            // console.log(Produtos)
        })
        // console.log(this.state.Produtos)
    }

    public buscarServicos() {
        let buscadorServicos = new BuscadorServicos()
        const Servicos = buscadorServicos.buscar()
        Servicos.then((Servicos) => {
            this.setState({ Servicos: Servicos })
            // console.log(Servicos)
        })
        // console.log(this.state.Servicos)
    }

    componentDidMount() {
        this.buscarProdutos();
        this.buscarServicos();
        // console.log(M);
        M.AutoInit();
    }

    render(): ReactElement {
        const produtosRows = this.state.Produtos.map((Produto) => ({
            id: Produto.id + 1,
            name: Produto.nome,
            preco: Produto.preco,
            descricao: Produto.descricao,
            consumo: Produto.consumo,
            tipo: 'Produto',
          }));
          
        const servicosRows = this.state.Servicos.map((Servico) => ({
            id: Servico.id + 2,
            name: Servico.nome,
            preco: Servico.preco,
            descricao: Servico.descricao,
            consumo: Servico.consumo,
            tipo: 'Serviço',
          }));
    
          
        const mergedRows = produtosRows.concat(servicosRows);
        console.log(mergedRows)

        return (
            <div>
                <Appbar />
                <h1 style={titulo}>Produtos e Serviços mais consumidos</h1>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Box>
                        <DataGrid
                            columns={columns}
                            rows={mergedRows}
                        />  
                    </Box>
                </Box>
            </div>
        );
    }
}

export default ListagensProduto;
