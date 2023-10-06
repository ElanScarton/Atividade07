class Cliente{
    constructor(nome, renda, telefone, email){
    this.nome = nome,
    this.renda = renda,
    this.telefone = telefone,
    this.email = email
    }

    verificarCredito(){
    return new Promise((resolve, reject) => {
        if (cliente1.renda >= 2000){
            resolve ("crédito aprovado")
        }
        else{
            reject ("Crédito não aprovado")
        }
    })
}
}

const cliente1 = new Cliente ("Elan", 1000, "(19)992533422", "abc@gmail.com")

cliente1
    .verificarCredito()
    .then((resultado) =>{
        console.log(cliente1.nome + ": " + resultado)
    })
    .catch((erro) => {
        console.error(cliente1.nome + ": " + erro)
    })


