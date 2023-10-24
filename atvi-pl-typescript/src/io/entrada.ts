import promptSync from "prompt-sync";
export default class Entrada {
    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(mensagem)
        let numero = new Number(valor)
        return numero.valueOf()
    }
    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let texto = prompt(mensagem)
        return texto
    }
    public receberCpf(mensagem: string): string {
        let prompt = promptSync();
        let exe = true
        while (exe) {
            let valor = prompt(mensagem)
            if (valor == "") {
                console.log("Esse campo é obrigatorio!");
                exe = true
            } else if (valor.replace(/[^0-9]/g, '').length < 11) {
                console.log("Esse campo não pode ser menor que 11 digitos! E deve conter apenas números!");
                exe = true
            } else if (valor.replace(/[^0-9]/g, '').length > 11) {
                console.log("Esse campo não pode ser maior que 11 digitos!")
                exe = true
            } else {
                exe = false
                return valor.replace(/[^0-9]/g, '')
            }
        }
        return ""
    }
    public receberPet(mensagem: string): string {
        let prompt = promptSync();
        let exe = true
        while (exe) {
            let texto = prompt(mensagem)
            if (texto == "") {
                console.log("Esse campo é obrigatorio!");
                exe = true
            }
        }
        return "Como você chegou aqui???"
    }
}