import React, { ReactElement, ChangeEvent } from 'react';
import Appbar from '../components/Appbar';
import { Box, Button, TextField } from '@mui/material';
import Endereco from '../components/models/endereco';
import Telefone from '../components/models/telefone';
import CadastradorCliente from '../cadastradores/cadastradorCliente';

class CadastroCliente extends React.Component {
  private nome: string | undefined;
  private nomeSocial: string | undefined;
  private email: string | undefined;
  private endereco: Endereco;

  constructor(props: any) {
    super(props);
    this.endereco = new Endereco('', '', '', '', '');
    this.capturarNome = this.capturarNome.bind(this);
    this.capturarNomeSocial = this.capturarNomeSocial.bind(this);
    this.capturarEmail = this.capturarEmail.bind(this);

    this.capturarEnderecoEstado = this.capturarEnderecoEstado.bind(this);
    this.capturarEnderecoCidade = this.capturarEnderecoCidade.bind(this);
    this.capturarEnderecoBairro = this.capturarEnderecoBairro.bind(this);
    this.capturarEnderecoRua = this.capturarEnderecoRua.bind(this);
    this.capturarEnderecoNum = this.capturarEnderecoNum.bind(this);

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

  public capturarEnderecoEstado(evento: ChangeEvent<HTMLInputElement>) {   
    this.endereco.estado = evento.target.value;
  }

  public capturarEnderecoCidade(evento: ChangeEvent<HTMLInputElement>) {   // corrigir
    this.endereco.cidade = evento.target.value;
  }

  public capturarEnderecoBairro(evento: ChangeEvent<HTMLInputElement>) {   // corrigir
    this.endereco.bairro = evento.target.value;
  }

  public capturarEnderecoRua(evento: ChangeEvent<HTMLInputElement>) {   // corrigir
    this.endereco.rua = evento.target.value;
  }

  public capturarEnderecoNum(evento: ChangeEvent<HTMLInputElement>) {   // corrigir
    this.endereco.numero = evento.target.value;
  }


  public submeterFormulario(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    let cliente = {
      nome: this.nome,
      nomeSocial: this.nomeSocial,
      email: this.email,
      endereco: this.endereco,
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
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Estado" id="endereco" onChange={this.capturarEnderecoEstado} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Cidade" id="endereco" onChange={this.capturarEnderecoCidade} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Bairro" id="endereco" onChange={this.capturarEnderecoBairro} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Rua" id="endereco" onChange={this.capturarEnderecoRua} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Numero" id="endereco" onChange={this.capturarEnderecoNum} />
            </Box>
          </Box>
          <Button sx={{ justifyContent: "center", textAlign: "center" }} variant="contained" type="submit">Cadastrar Cliente</Button>
        </form>
      </div>
    );
  }
}

export default CadastroCliente;
