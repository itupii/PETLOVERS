import React, { ReactElement } from 'react';
import Appbar from '../components/Appbar';
import { DataGrid, GridActionsCellItem, GridColDef, GridRowId } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import M from 'materialize-css';
import CSS from 'csstype'
import BuscadorProdutos from '../buscadores/buscadorProduto';
import RemovedorProduto from '../removedores/removedorProduto';
import RemovedorProdutoLocal from '../removedores/removedorProdutoLocal';
import Produto from '../components/models/produto';


type State = {
  Produtos: Produto[]
}

type rows = {
  row: Object
}

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
  { field: 'preco', headerName: 'Preço', width: 150 },
  { field: 'descricao', headerName: 'Descrição', width: 190 },
  { field: 'consumo', headerName: 'Consumo', width: 190 },


  {
    field: 'actions',
    headerName: 'Actions',
    width: 90,
    type: "actions",
    getActions: (params) => [
      // <GridActionsCellItem label='Editar' icon={<EditIcon color='success' />} />,
      <GridActionsCellItem
        label='Editar'
        icon={<EditIcon color='success' />}
        onClick={() => {
          // console.log(params.row);
          editarRemoto(params.row.id, params.row.name, params.row.preco, params.row.descricao, params.row.consumo);
        }}
      />,
      // <GridActionsCellItem label='Excluir' icon={<DeleteIcon color='error' />} onClick={(e) => {this.excluirRemoto(e)}} />
      <GridActionsCellItem
        label='Excluir'
        icon={<DeleteIcon color='error' />}
        onClick={() => {
          // console.log(params.row);
          excluirRemoto(params.row.id);
        }}
      />,
    ]
  },
]

class ListagensProduto extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = { Produtos: [] }
    this.excluirLocal = this.excluirLocal.bind(this)
  }

  public buscarProdutos() {
    let buscadorProdutos = new BuscadorProdutos()
    const Produtos = buscadorProdutos.buscar()
    Produtos.then(Produtos => {
      this.setState({ Produtos: Produtos })
      console.log(Produtos)
    })
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    console.log(this.state.Produtos)
  }

  public excluirRemoto(idProduto: string) {
    let removedor = new RemovedorProduto()
    let Produto: Produto = {
      id: idProduto,
      nome: "",
      preco: "",
      descricao: "",
      consumo: ""
    };
    removedor.remover(Produto);
  }

  public excluirLocal(id: string, e: any) {
    e.preventDefault()
    let removedorLocal = new RemovedorProdutoLocal()
    let Produtos = removedorLocal.remover(this.state.Produtos, id)
    this.setState({
      Produtos: Produtos
    })
    this.excluirRemoto(id)
  }

  componentDidMount() {
    this.buscarProdutos();
    console.log(M);
    M.AutoInit();
  }
  render(): ReactElement {
    const rows = this.state.Produtos.map((Produto) => ({
      id: Produto.id,
      name: Produto.nome,
      preco: Produto.preco,
      descricao: Produto.descricao,
      consumo: Produto.consumo,
    }));
    console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBB")
    console.log(rows)
    return (
      <div>
        <Appbar />
        <h1 style={titulo}>Produto</h1>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box >
            <DataGrid
              columns={columns}
              rows={rows}
            // sx={{ width: "600px" }}
            />
          </Box>
        </Box>
      </div>
    );
  }
}
export default ListagensProduto;

function excluirRemoto(idProduto: string) {
  let removedor = new RemovedorProduto()
  let Produto: Produto = {
    id: idProduto,
    nome: "",
    preco: "",
    descricao: "",
    consumo: ""
  };
  removedor.remover(Produto);
}


function editarRemoto(idCliente: number, name: string, preco: number, descricao: string, consumo: number) {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // let nome = document.querySelector("")

  var raw = JSON.stringify({
    "nome": name,
    "preco": preco,
    "descricao": descricao,
    "consumo": consumo
  });

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow' as RequestRedirect
  };

  fetch(`http://localhost:3001/produto/modificar/${idCliente}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}