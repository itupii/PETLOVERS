
export default class Cliente {
  public id !: string;
  public nome: string;
  public nomeSocial: string;
  public email: string;
  public telefone: string;
  public endereco: string;


  constructor(nome: string, email: string, endereco: string, nomeSocial: string, telefone: string) {
    this.nome = nome;
    this.nomeSocial = nomeSocial;
    this.endereco = endereco;
    this.email = email;
    this.telefone = telefone;
  }
}
