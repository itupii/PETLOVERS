import React, { ReactElement } from 'react';
import Appbar from '../components/Appbar';
import { Box, Button, TextField } from '@mui/material';

function CadastroProduto(): ReactElement {
    return <div> <Appbar />
        <h2>Cadastro de Produto</h2>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box sx={{ margin: "100px", display: "flex" }}>
                <TextField sx={{ marginRight: "50px" }} fullWidth label="Nome" id="nome" />
                <TextField sx={{ marginRight: "50px" }} fullWidth label="Preço" id="preco" />
            </Box>
        </Box>
        <div>
            <Button variant="contained">Cadastrar Produto</Button>
        </div>
    </div>
}


export default CadastroProduto;
