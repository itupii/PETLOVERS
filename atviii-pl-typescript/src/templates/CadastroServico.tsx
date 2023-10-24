import React, { ReactElement } from 'react';
import Appbar from '../components/Appbar';
import { Box, Button, TextField } from '@mui/material';

function CadastroServico(): ReactElement {
    return <div> <Appbar />
        <h2>Cadastro de Serviço</h2>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box sx={{ margin: "100px", display: "flex" }}>
                <TextField sx={{ marginRight: "50px" }} fullWidth label="Nome" id="nome" />
                <TextField sx={{ marginRight: "50px" }} fullWidth label="Preço" id="preco" />
            </Box>
        </Box>
        <div>
            <Button variant="contained">Cadastrar Serviço</Button>
        </div>
    </div>
}


export default CadastroServico;
