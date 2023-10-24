import React, { ReactElement, ChangeEvent } from 'react';
import Appbar from '../components/Appbar';
import { Box, Button, TextField } from '@mui/material';
import CadastradorServico from '../cadastradores/cadastradorServico';

class CadastroServico extends React.Component {
  private nome: string | undefined;
  private preco: string | undefined;
  private consumo: string | undefined;
  private descricao: string | undefined;

  constructor(props: any) {
    super(props);
    this.capturarNome = this.capturarNome.bind(this);
    this.capturarPreco = this.capturarPreco.bind(this);
    this.capturarConsumo = this.capturarConsumo.bind(this);
    this.capturarDescricao = this.capturarDescricao.bind(this);

    this.submeterFormulario = this.submeterFormulario.bind(this);
    this.cadastrarservico = this.cadastrarservico.bind(this);
  }

  public cadastrarservico(objeto: Object) {
    let cadastrador = new CadastradorServico();
    cadastrador.cadastrar(objeto);
  }

  public capturarNome(evento: ChangeEvent<HTMLInputElement>) {
    this.nome = evento.target.value;
  }

  public capturarPreco(evento: ChangeEvent<HTMLInputElement>) {
    this.preco = evento.target.value;
  }

  public capturarDescricao(evento: ChangeEvent<HTMLInputElement>) {
    this.descricao = evento.target.value;
  }


  public capturarConsumo(evento: ChangeEvent<HTMLInputElement>) {
    this.consumo = evento.target.value;
  }


  public submeterFormulario(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    let servico = {
      nome: this.nome,
      preco: this.preco,
      descricao: this.descricao,
      consumo: this.consumo,
    };
    this.cadastrarservico(servico);
    evento.currentTarget.reset();
  }

  render(): ReactElement {
    return (
      <div>
        <Appbar />
        <h2>Cadastro de servico</h2>
        <form onSubmit={this.submeterFormulario}>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box sx={{ margin: "100px", display: "flex" }}>
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Nome" id="nome" onChange={this.capturarNome} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Preço" id="preco" onChange={this.capturarPreco} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Descrição" id="descricao" onChange={this.capturarDescricao} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Consumo" id="consumo" onChange={this.capturarConsumo} />
            </Box>
          </Box>
          <Button sx={{ justifyContent: "center", textAlign: "center" }} variant="contained" type="submit">Cadastrar servico</Button>
        </form>
      </div>
    );
  }
}

export default CadastroServico;
