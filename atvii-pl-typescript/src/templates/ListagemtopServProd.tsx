import React, { ReactElement } from 'react';
import Appbar from '../components/Appbar';
import { DataGrid, GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import CSS from 'csstype'

const titulo: CSS.Properties = {
    marginTop: "70px",
    textAlign: "center"
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'prodserv',
        headerName: 'Nome do Produto/Serviço',
        width: 150,
        editable: true,
    },
    { field: 'valorprodserv', headerName: 'Valor do Produto/Serviço', width: 90 },
]

// back
const rows = [
    { id: 1, prodserv: '---', valorprodserv: '--' },
    { id: 2, prodserv: '---', valorprodserv: '--' },
    { id: 3, prodserv: '---', valorprodserv: '--' },
    { id: 4, prodserv: '---', valorprodserv: '--' },
    { id: 5, prodserv: '---', valorprodserv: '--' },
    { id: 6, prodserv: '---', valorprodserv: '--' },
    { id: 7, prodserv: '---', valorprodserv: '--' },
    { id: 8, prodserv: '---', valorprodserv: '--' },
    { id: 9, prodserv: '---', valorprodserv: '--' },
    { id: 10, prodserv: '---', valorprodserv: '--' },
];

function ListagemtopServProd(): ReactElement {
    return <div> <Appbar />
        <h1 style={titulo}>Top serviços ou produtos mais consumidos</h1>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "1000px" }}>
                <DataGrid
                    columns={columns}
                    rows={rows}
                // sx={{ width: "600px" }}
                />
            </Box>
        </Box>
    </div>
}

export default ListagemtopServProd;
