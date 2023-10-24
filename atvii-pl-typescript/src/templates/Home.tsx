import React, { ReactElement } from 'react';
import CadastroCliente from './CadastroCliente';
import Appbar from '../components/Appbar';

import '../components/designe.css';
import CSS from 'csstype'

import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const titulo: CSS.Properties = {
  marginTop: "70px"
}

function Home(): ReactElement {
  const navigate = useNavigate()

  return (
    <div> <Appbar />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <h1 style={titulo}>Cadastros</h1>
        <Box sx={{ margin: "50px", display: "flex" }}>
          <Button sx={{ color: "white", marginRight: "20px" }} variant="contained" onClick={() => {
            navigate("/cadastro-cliente")
          }}>
            Cadastro de Cliente
          </Button>

          <Button sx={{ color: "white", marginRight: "20px" }} variant="contained" onClick={() => {
            navigate("/cadastro-pet")
          }}>
            Cadastro de Pet
          </Button>

          <Button sx={{ color: "white", marginRight: "20px" }} variant="contained" onClick={() => {
            navigate("/cadastro-produto")
          }}>
            Cadastro de Produto
          </Button>

          <Button sx={{ color: "white", marginRight: "20px" }} variant="contained" onClick={() => {
            navigate("/cadastro-servico")
          }}>
            Cadastro de Servico
          </Button>
        </Box>
      </Box>
    </div >
  );
}

export default Home;
