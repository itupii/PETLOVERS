import { AppBar, Toolbar, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

export const Appbar = () => {

    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <Toolbar>
                <Button sx={{ color: "white" }} onClick={() => {
                    navigate("/")
                }}>
                    Home
                </Button>

                <Button sx={{ color: "white" }} onClick={() => {
                    navigate("/cliente")
                }}>
                    Cliente
                </Button>

                <Button sx={{ color: "white" }} onClick={() => {
                    navigate("/Pet")
                }}>
                    Pet
                </Button>

                <Button sx={{ color: "white" }} onClick={() => {
                    navigate("/Produto")
                }}>
                    Produto
                </Button>

                <Button sx={{ color: "white" }} onClick={() => {
                    navigate("/Servico")
                }}>
                    Serviço
                </Button>

                <Button sx={{ color: "white" }} onClick={() => {
                    navigate("/Listagens")
                }}>
                    Listagens
                </Button>

            </Toolbar>

        </AppBar>
    )
}

export default Appbar;