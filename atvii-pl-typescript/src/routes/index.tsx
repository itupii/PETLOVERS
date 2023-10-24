import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../templates/Home";
import CadastroCliente from "../templates/CadastroCliente";
import CadastroPet from "../templates/CadastroPet";
import Listagens from "../templates/Listagens";
import Produto from "../templates/Produto";
import Servico from "../templates/Servico";

import Cliente from "../templates/Cliente"
import Pet from "../templates/Pet";
import CadastroProduto from "../templates/CadastroProduto";
import CadastroServico from "../templates/CadastroServico";
import Listagemtop10quant from "../templates/Listagemtop10quant";
import Listagemtop5emValor from "../templates/Listagemtop5emValor";
import ListagemtopServProd from "../templates/ListagemtopServProd";
import ListagemtopServProdPet from "../templates/ListagemtopServProdPet";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "cadastro-cliente",
        element: <CadastroCliente />,
    },
    {
        path: "cadastro-pet",
        element: <CadastroPet />,
    },
    {
        path: "cadastro-produto",
        element: <CadastroProduto />,
    },
    {
        path: "cadastro-servico",
        element: <CadastroServico />,
    },
    {
        path: "cadastro-pet",
        element: <CadastroPet />,
    },
    {
        path: "cliente",
        element: <Cliente />,
    },
    {
        path: "pet",
        element: <Pet />,
    },
    {
        path: "produto",
        element: <Produto />,
    },
    {
        path: "servico",
        element: <Servico />,
    },
    {
        path: "listagens",
        element: <Listagens />,
    },
    {
        path: "listagemtop10quant",
        element: <Listagemtop10quant />,
    },
    {
        path: "Listagemtop5emValor",
        element: <Listagemtop5emValor />,
    },
    {
        path: "ListagemtopServProd",
        element: <ListagemtopServProd />,
    },
    {
        path: "ListagemtopServProdPet",
        element: <ListagemtopServProdPet />,
    },

]);
