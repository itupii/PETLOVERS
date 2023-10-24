import React, { ReactElement } from 'react';
import Appbar from '../components/Appbar';
import { DataGrid, GridActionsCellItem, GridColDef, GridRowId } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import M from 'materialize-css';
import CSS from 'csstype'
import BuscadorServicos from '../buscadores/buscadorServico';
import RemovedorServico from '../removedores/removedorServico';
import RemovedorServicoLocal from '../removedores/removedorServicoLocal';
import Servico from '../components/models/servico';


type State = {
  Servicos: Servico[]
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

class ListagensServico extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = { Servicos: [] }
    this.excluirLocal = this.excluirLocal.bind(this)
  }

  public buscarServicos() {
    let buscadorServicos = new BuscadorServicos()
    const Servicos = buscadorServicos.buscar()
    Servicos.then(Servicos => {
      this.setState({Servicos:Servicos})
      console.log(Servicos)
    })
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    console.log(this.state.Servicos)
  }

  public excluirRemoto(idServico: string) {
    let removedor = new RemovedorServico()
    let Servico: Servico = {
      id: idServico,
      nome: "",
      preco: "",
      descricao: "",
      consumo: ""
    };
    removedor.remover(Servico);
  }

  public excluirLocal(id: string, e: any) {
    e.preventDefault()
    let removedorLocal = new RemovedorServicoLocal()
    let Servicos = removedorLocal.remover(this.state.Servicos, id)
    this.setState({
      Servicos: Servicos
    })
    this.excluirRemoto(id)
  }

  componentDidMount() {
    this.buscarServicos();
    console.log(M);
    M.AutoInit();
  }
  render(): ReactElement {
    const rows = this.state.Servicos.map((Servico) => ({
      id: Servico.id,
      name: Servico.nome,
      preco: Servico.preco,
      descricao: Servico.descricao,
      consumo: Servico.consumo,
    }));
    console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBB")
    console.log(rows)
    return (
      <div>
        <Appbar />
        <h1 style={titulo}>Servico</h1>
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
export default ListagensServico;

function excluirRemoto(idServico: string) {
  let removedor = new RemovedorServico()
  let Servico: Servico = {
    id: idServico,
    nome: "",
    preco: "",
    descricao: "",
    consumo: ""
  };
  removedor.remover(Servico);
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

  fetch(`http://localhost:3001/servico/modificar/${idCliente}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}