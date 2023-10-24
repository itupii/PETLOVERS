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
        field: 'name',
        headerName: 'Nome',
        width: 150,
        editable: true,
    },
    { field: 'cpf', headerName: 'CPF', width: 90 },
    { field: 'valorGasto', headerName: 'Valor Gasto', width: 90 },
]

// back
const rows = [
    { id: 1, name: '---', cpf: '---------', valorGasto: '--' },
    { id: 2, name: '---', cpf: '---------', valorGasto: '--' },
    { id: 3, name: '---', cpf: '---------', valorGasto: '--' },
    { id: 4, name: '---', cpf: '---------', valorGasto: '--' },
    { id: 5, name: '---', cpf: '---------', valorGasto: '--' },
];

function Listagemtop5emValor(): ReactElement {
    return <div> <Appbar />
        <h1 style={titulo}>Top 5 clientes que mais consumiram em valor</h1>
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

export default Listagemtop5emValor;
