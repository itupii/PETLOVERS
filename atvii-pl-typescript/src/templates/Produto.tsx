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
    { field: 'preco', headerName: 'Preço', width: 90 },
    { field: 'desc', headerName: 'Descrição', width: 90 },
    {
        field: 'actions', headerName: 'Actions', width: 90, type: "actions", getActions: (params) => [
            <GridActionsCellItem label='Editar' icon={<EditIcon color='success' />} />,
            <GridActionsCellItem label='Excluir' icon={<DeleteIcon color='error' />} />
        ]
    },
]

// back
const rows = [
    { id: 1, name: '---', preco: '---', desc: '---------' },
    { id: 2, name: '---', preco: '---', desc: '---------' },
    { id: 3, name: '---', preco: '---', desc: '---------' },
    { id: 4, name: '---', preco: '---', desc: '---------' },
    { id: 5, name: '---', preco: '---', desc: '---------' },
];

function Produto(): ReactElement {
    return <div> <Appbar />
        <h1 style={titulo}>Produto</h1>
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

export default Produto;
