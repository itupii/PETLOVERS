import React, { ReactElement, ChangeEvent } from 'react';
import Appbar from '../components/Appbar';
import { Box, Button, TextField } from '@mui/material';
import CadastradorServProd from '../cadastradores/cadastradorServProd';

class CadastroServProd extends React.Component {
  private nome_cliente: string | undefined;
  private tipo: string | undefined;
  private valor: string | undefined;
  private quantidade: string | undefined;
  private nome_sp: string | undefined;
  private racapet: string | undefined;
  private tipopet: string | undefined;

  constructor(props: any) {
    super(props);
    this.capturarNome_cliente = this.capturarNome_cliente.bind(this);
    this.capturarTipo = this.capturarTipo.bind(this);
    this.capturarValor = this.capturarValor.bind(this);
    this.capturarQuantidade = this.capturarQuantidade.bind(this);
    this.capturarNome_sp = this.capturarNome_sp.bind(this);
    this.capturarTipopet = this.capturarTipopet.bind(this);
    this.capturarRacapet = this.capturarRacapet.bind(this);

    this.submeterFormulario = this.submeterFormulario.bind(this);
    this.cadastrarservProd = this.cadastrarservProd.bind(this);
  }

  public cadastrarservProd(objeto: Object) {
    let cadastrador = new CadastradorServProd();
    cadastrador.cadastrar(objeto);
  }

  public capturarNome_cliente(evento: ChangeEvent<HTMLInputElement>) {
    this.nome_cliente = evento.target.value;
  }

  public capturarNome_sp(evento: ChangeEvent<HTMLInputElement>) {
    this.nome_sp = evento.target.value;
  }

  public capturarTipo(evento: ChangeEvent<HTMLInputElement>) {
    this.tipo = evento.target.value;
  }

  public capturarQuantidade(evento: ChangeEvent<HTMLInputElement>) {
    this.quantidade = evento.target.value;
  }


  public capturarValor(evento: ChangeEvent<HTMLInputElement>) {
    this.valor = evento.target.value;
  }

  
  public capturarTipopet(evento: ChangeEvent<HTMLInputElement>) {
    this.tipopet = evento.target.value;
  }

  
  public capturarRacapet(evento: ChangeEvent<HTMLInputElement>) {
    this.racapet = evento.target.value;
  }


  public submeterFormulario(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    let servProd = {
      nome_cliente: this.nome_cliente,
      tipo: this.tipo,
      quantidade: this.quantidade,
      valor: this.valor,
      nome_sp: this.nome_sp,
      tipopet: this.tipopet,
      racapet: this.racapet,
    };
    this.cadastrarservProd(servProd);
    evento.currentTarget.reset();
  }

  render(): ReactElement {
    return (
      <div>
        <Appbar />
        <h2>Cadastro de Consumo</h2>
        <form onSubmit={this.submeterFormulario}>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box sx={{ margin: "100px", display: "flex" }}>
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Nome Cliente" id="nome_cliente" onChange={this.capturarNome_cliente} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Tipo" id="tipo" onChange={this.capturarTipo} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Nome Ação" id="nome_sp" onChange={this.capturarNome_sp} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Quantidade" id="quantidade" onChange={this.capturarQuantidade} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Valor" id="valor" onChange={this.capturarValor} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Tipo do Pet" id="tipopet" onChange={this.capturarTipopet} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Raca do Pet" id="racapet" onChange={this.capturarRacapet} />
            </Box>
            
          </Box>
          <Button sx={{ justifyContent: "center", textAlign: "center" }} variant="contained" type="submit">Cadastrar servico</Button>
        </form>
      </div>
    );
  }
}

export default CadastroServProd;
