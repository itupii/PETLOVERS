import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
  public nome: string;
  public sobreNome: string;
  public email: string;
  public telefones: Telefone[];
  public endereco: Endereco;
  public id!: string;
  public nomeSocial: string;

  constructor(nome: string, sobreNome: string, email: string, endereco: Endereco, nomeSocial: string) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.nomeSocial = nomeSocial;
    this.email = email;
    this.endereco = endereco;
    this.telefones = [];
  }
}
