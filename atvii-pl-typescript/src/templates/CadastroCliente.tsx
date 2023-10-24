import React, { ReactElement } from 'react';
import Appbar from '../components/Appbar';
import { Box, Button, TextField } from '@mui/material';

function CadastroCliente(): ReactElement {
  return <div> <Appbar />
    <h2>Cadastro de Cliente</h2>
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box sx={{ margin: "100px", display: "flex" }}>
        <TextField sx={{ marginRight: "50px" }} fullWidth label="Nome" id="nome" />
        <TextField sx={{ marginRight: "50px" }} fullWidth label="Nome Social" id="nomesocial" />
        <TextField sx={{ marginRight: "50px" }} fullWidth label="CPF" id="cpf" />
        <TextField sx={{ marginRight: "50px" }} fullWidth label="RG" id="rg" />
        <TextField sx={{ marginRight: "50px" }} fullWidth label="Gênero" id="gen" />
        <TextField sx={{ marginRight: "50px" }} fullWidth label="Telefone" id="tel" />
      </Box>
    </Box>
    <Button sx={{ justifyContent: "center", textAlign: "center" }} variant="contained">Cadastrar Cliente</Button>
  </div>
}

export default CadastroCliente;
