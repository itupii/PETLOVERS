import React, { ReactElement } from 'react';
import Appbar from '../components/Appbar';
import { DataGrid, GridActionsCellItem, GridColDef, GridRowId } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import M from 'materialize-css';
import CSS from 'csstype'

import BuscadorServProd from '../buscadores/buscadorServProd';
import usuarioProdServ from '../components/models/usuarioProdServ';


type State = {
    usuarioProdServ: usuarioProdServ[]
}

type rows = {
    row: Object
}

const titulo: CSS.Properties = {
    marginTop: "70px",
    textAlign: "center"
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'nome_cliente',
        headerName: 'Cliente',
        width: 150,
        editable: true,
    },
    { field: 'tipo', headerName: 'Tipo', width: 150 },
    { field: 'nome_sp', headerName: 'servico/produto', width: 190 },
    { field: 'valor', headerName: 'valor', width: 190 },
]

class ListagensServProd extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = { usuarioProdServ: [] }
    }

    public buscarusuarioProdServ() {
        let buscadorusuarioProdServ = new BuscadorServProd()
        const usuarioProdServ = buscadorusuarioProdServ.buscar()
        usuarioProdServ.then(usuarioProdServ => {
            this.setState({ usuarioProdServ: usuarioProdServ })
            console.log(usuarioProdServ)
        })
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
        console.log(this.state.usuarioProdServ)
    }

    componentDidMount() {
        this.buscarusuarioProdServ();
        console.log(M);
        M.AutoInit();
    }
    render(): ReactElement {
        const rows = this.state.usuarioProdServ.map((Produto) => ({
            id: Produto.id,
            nome_cliente: Produto.nome_cliente,
            tipo: Produto.tipo,
            nome_sp: Produto.nome_sp,
            valor: Produto.valor
        }));
        console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBB")
        console.log(rows)
        return (
            <div>
                <Appbar />
                <h1 style={titulo}>Top clientes em Valor</h1>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Box >
                        <DataGrid
                            columns={columns}
                            rows={rows}
                        // sx={{ width: "600px" }}
                        />
                    </Box>
                </Box>
            </div>
        );
    }
}
export default ListagensServProd;

