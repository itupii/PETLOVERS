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

function Listagens(): ReactElement {
    const navigate = useNavigate()

    return (
        <div> <Appbar />
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <h1 style={titulo}>Listagens</h1>
                <Box sx={{ margin: "50px", display: "flex" }}>
                    <Button sx={{ color: "white", marginRight: "20px" }} variant="contained" onClick={() => {
                        navigate("/Listagemtop10quant")
                    }}>
                        Top 10 clientes em consumo/quantidade
                    </Button>

                    <Button sx={{ color: "white", marginRight: "20px" }} variant="contained" onClick={() => {
                        navigate("/Listagemtop5emValor")
                    }}>
                        top 5 clientes que mais consumiram em valor
                    </Button>

                    <Button sx={{ color: "white", marginRight: "20px" }} variant="contained" onClick={() => {
                        navigate("/ListagemtopServProd")
                    }}>
                        top serviços ou produtos mais consumidos
                    </Button>

                    <Button sx={{ color: "white", marginRight: "20px" }} variant="contained" onClick={() => {
                        navigate("/ListagemtopServProdPet")
                    }}>
                        top serviços ou produtos mais consumidos por tipo e raça de pets
                    </Button>
                </Box>
            </Box>
        </div >
    );
}

export default Listagens;
