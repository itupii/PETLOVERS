
export default class ProdServ {
    public id !: string;
    public nome_cliente: string;
    public tipo: string;
    public nome_sp: string;
    public valor: string;
    public quantidade: string;
    public racapet: string;
    public tipopet: string;
  
  
    constructor(nome_cliente: string, tipo: string, nome_sp: string, valor: string, quantidade: string, racapet: string, tipopet: string) {
      this.nome_cliente = nome_cliente;
      this.tipo = tipo;
      this.valor = valor;
      this.nome_sp = nome_sp;
      this.quantidade = quantidade;
      this.tipopet = tipopet;
      this.racapet = racapet;
    }
  }
  