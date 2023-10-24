export default class Pet {
  public id !: string;
  public nome: string;
  public raca: string;
  public tipo: string;
  

  constructor(nome: string, raca: string, tipo: string) {
    this.nome = nome;
    this.raca = raca;
    this.tipo = tipo;

  }
}
