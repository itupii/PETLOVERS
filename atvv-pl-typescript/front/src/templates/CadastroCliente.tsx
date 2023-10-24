import React, { ReactElement, ChangeEvent } from 'react';
import Appbar from '../components/Appbar';
import { Box, Button, TextField } from '@mui/material';
import CadastradorCliente from '../cadastradores/cadastradorCliente';

class CadastroCliente extends React.Component {
  private nome: string | undefined;
  private nomeSocial: string | undefined;
  private email: string | undefined;
  private endereco: string | undefined;
  private telefone: string | undefined;

  constructor(props: any) {
    super(props);
    this.capturarEndereco = this.capturarEndereco.bind(this);
    this.capturarNome = this.capturarNome.bind(this);
    this.capturarNomeSocial = this.capturarNomeSocial.bind(this);
    this.capturarEmail = this.capturarEmail.bind(this);
    this.capturarTelefone = this.capturarTelefone.bind(this);

    this.submeterFormulario = this.submeterFormulario.bind(this);
    this.cadastrarCliente = this.cadastrarCliente.bind(this);
  }

  public cadastrarCliente(objeto: Object) {
    let cadastrador = new CadastradorCliente();
    cadastrador.cadastrar(objeto);
  }

  public capturarNome(evento: ChangeEvent<HTMLInputElement>) {
    this.nome = evento.target.value;
  }

  public capturarNomeSocial(evento: ChangeEvent<HTMLInputElement>) {
    this.nomeSocial = evento.target.value;
  }

  public capturarEmail(evento: ChangeEvent<HTMLInputElement>) {
    this.email = evento.target.value;
  }

  public capturarEndereco(evento: ChangeEvent<HTMLInputElement>) {   
    this.endereco = evento.target.value;
  }

  public capturarTelefone(evento: ChangeEvent<HTMLInputElement>) {   
    this.telefone = evento.target.value;
  }


  public submeterFormulario(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    let cliente = {
      nome: this.nome,
      nomeSocial: this.nomeSocial,
      email: this.email,
      endereco: this.endereco,
      telefone: this.telefone,
    };
    this.cadastrarCliente(cliente);
    evento.currentTarget.reset();
  }

  render(): ReactElement {
    return (
      <div>
        <Appbar />
        <h2>Cadastro de Cliente</h2>
        <form onSubmit={this.submeterFormulario}>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box sx={{ margin: "100px", display: "flex" }}>
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Nome" id="nome" onChange={this.capturarNome} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Nome Social" id="nomeSocial" onChange={this.capturarNomeSocial} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Email" id="email" onChange={this.capturarEmail} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Endereco" id="endereco" onChange={this.capturarEndereco} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Telefone" id="telefone" onChange={this.capturarTelefone} />
            </Box>
          </Box>
          <Button sx={{ justifyContent: "center", textAlign: "center" }} variant="contained" type="submit">Cadastrar Cliente</Button>
        </form>
      </div>
    );
  }
}

export default CadastroCliente;
