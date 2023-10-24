export default class Servico {
  public id !: string;
  public nome: string;
  public preco: string;
  public descricao: string;
  public consumo: string;

  constructor(nome: string, preco: string, consumo: string, descricao: string) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.consumo = consumo;

  }
}
