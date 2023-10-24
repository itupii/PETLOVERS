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
    { field: 'totalConsu', headerName: 'Total Consumido', width: 90 },
]

// back
const rows = [
    { id: 1, name: '---', cpf: '---------', totalConsu: '--' },
    { id: 2, name: '---', cpf: '---------', totalConsu: '--' },
    { id: 3, name: '---', cpf: '---------', totalConsu: '--' },
    { id: 4, name: '---', cpf: '---------', totalConsu: '--' },
    { id: 5, name: '---', cpf: '---------', totalConsu: '--' },
    { id: 6, name: '---', cpf: '---------', totalConsu: '--' },
    { id: 7, name: '---', cpf: '---------', totalConsu: '--' },
    { id: 8, name: '---', cpf: '---------', totalConsu: '--' },
    { id: 9, name: '---', cpf: '---------', totalConsu: '--' },
    { id: 10, name: '---', cpf: '---------', totalConsu: '--' },
];

function Listagemtop10quant(): ReactElement {
    return <div> <Appbar />
        <h1 style={titulo}>Top 10 clientes que mais consumiram produtos ou serviços</h1>
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

export default Listagemtop10quant;
