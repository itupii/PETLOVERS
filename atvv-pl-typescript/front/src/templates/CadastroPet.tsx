import React, { ReactElement, ChangeEvent } from 'react';
import Appbar from '../components/Appbar';
import { Box, Button, TextField } from '@mui/material';
import CadastradorPet from '../cadastradores/cadastradorPet';

class CadastroPet extends React.Component {
  private nome: string | undefined;
  private tipo: string | undefined;
  private raca: string | undefined;

  constructor(props: any) {
    super(props);
    this.capturarNome = this.capturarNome.bind(this);
    this.capturarTipo = this.capturarTipo.bind(this);
    this.capturarRaca = this.capturarRaca.bind(this);

    this.submeterFormulario = this.submeterFormulario.bind(this);
    this.cadastrarPet = this.cadastrarPet.bind(this);
  }

  public cadastrarPet(objeto: Object) {
    let cadastrador = new CadastradorPet();
    cadastrador.cadastrar(objeto);
  }

  public capturarNome(evento: ChangeEvent<HTMLInputElement>) {
    this.nome = evento.target.value;
  }

  public capturarTipo(evento: ChangeEvent<HTMLInputElement>) {
    this.tipo = evento.target.value;
  }

  public capturarRaca(evento: ChangeEvent<HTMLInputElement>) {
    this.raca = evento.target.value;
  }


  public submeterFormulario(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    let Pet = {
      nome: this.nome,
      tipo: this.tipo,
      raca: this.raca,
    };
    this.cadastrarPet(Pet);
    evento.currentTarget.reset();
  }

  render(): ReactElement {
    return (
      <div>
        <Appbar />
        <h2>Cadastro de Pet</h2>
        <form onSubmit={this.submeterFormulario}>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box sx={{ margin: "100px", display: "flex" }}>
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Nome" id="nome" onChange={this.capturarNome} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Tipo" id="Tipo" onChange={this.capturarTipo} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Raca" id="Raca" onChange={this.capturarRaca} />
            </Box>
          </Box>
          <Button sx={{ justifyContent: "center", textAlign: "center" }} variant="contained" type="submit">Cadastrar Pet</Button>
        </form>
      </div>
    );
  }
}

export default CadastroPet;
