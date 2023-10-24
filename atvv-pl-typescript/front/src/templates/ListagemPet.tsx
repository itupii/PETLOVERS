import React, { ReactElement } from 'react';
import Appbar from '../components/Appbar';
import { DataGrid, GridActionsCellItem, GridColDef, GridRowId } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import M from 'materialize-css';
import CSS from 'csstype'
import BuscadorPets from '../buscadores/buscadorPet';
import RemovedorPet from '../removedores/removedorPet';
import RemovedorPetLocal from '../removedores/removedorPetLocal';
import Pet from '../components/models/pet';


type State = {
  Pets: Pet[]
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
  { field: 'raca', headerName: 'Raça', width: 150 }, 
  { field: 'tipo', headerName: 'Tipo', width: 190 },


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
          editarRemoto(params.row.id, params.row.name, params.row.raca, params.row.tipo);
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

class ListagensPet extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = { Pets: [] }
    this.excluirLocal = this.excluirLocal.bind(this)
  }

  public buscarPets() {
    let buscadorPets = new BuscadorPets()
    const Pets = buscadorPets.buscar()
    Pets.then(Pets => {
      this.setState({Pets:Pets})
      console.log(Pets)
    })
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    console.log(this.state.Pets)
  }

  public excluirRemoto(idPet: string) {
    let removedor = new RemovedorPet()
    let Pet: Pet = {
      id: idPet,
      nome: "",
      raca: "",
      tipo: ""
    };
    removedor.remover(Pet);
  }

  public excluirLocal(id: string, e: any) {
    e.preventDefault()
    let removedorLocal = new RemovedorPetLocal()
    let Pets = removedorLocal.remover(this.state.Pets, id)
    this.setState({
      Pets: Pets
    })
    this.excluirRemoto(id)
  }

  componentDidMount() {
    this.buscarPets();
    console.log(M);
    M.AutoInit();
  }
  render(): ReactElement {
    const rows = this.state.Pets.map((Pet) => ({
      id: Pet.id,
      name: Pet.nome,
      raca: Pet.raca,
      tipo: Pet.tipo,
    }));
    console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBB")
    console.log(rows)
    return (
      <div>
        <Appbar />
        <h1 style={titulo}>Pet</h1>
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
export default ListagensPet;

function excluirRemoto(idPet: string) {
  let removedor = new RemovedorPet()
  let Pet: Pet = {
    id: idPet,
    nome: "",
    raca: "",
    tipo: ""
  };
  removedor.remover(Pet);
}


function editarRemoto(idCliente: number, name: string, raca: string, tipo: string) {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // let nome = document.querySelector("")

  var raw = JSON.stringify({
    "nome": name,
    "raca": raca,
    "tipo": tipo
  });

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders, 
    body: raw,
    redirect: 'follow' as RequestRedirect
  };

  fetch(`http://localhost:3001/pet/modificar/${idCliente}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}