import React, { ReactElement } from 'react';
import Appbar from '../components/Appbar';
import { Box, Button, TextField } from '@mui/material';

function CadastroPet(): ReactElement {
    return <div> <Appbar />
        <h2>Cadastro de Pet</h2>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box sx={{ margin: "100px", display: "flex" }}>
                <TextField sx={{ marginRight: "50px" }} fullWidth label="Tipo" id="tipo" />
                <TextField sx={{ marginRight: "50px" }} fullWidth label="Nome" id="nome" />
                <TextField sx={{ marginRight: "50px" }} fullWidth label="Raça" id="raca" />
                <TextField sx={{ marginRight: "50px" }} fullWidth label="Gênero" id="gen" />
            </Box>
        </Box>
        <div>
            <Button variant="contained">Cadastrar Pet</Button>
        </div>
    </div>
}


export default CadastroPet;
