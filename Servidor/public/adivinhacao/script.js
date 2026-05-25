let numeroSecreto = Math.floor(Math.random() * 101)
let tentativas = []
let jogoAcabou = false

function verificarPalpite(){
    if (jogoAcabou) {
        return
    }

    let palpite = Number(document.getElementById("palpite").value) 

    if (palpite < 0 || palpite > 100){
        document.getElementById("mensagem").textContent = "Digite um número entre 0 e 100"
        return
    }

    tentativas.push(palpite)
    document.getElementById("tentativas").textContent = "Tentativas: " + tentativas.join(", ")
    document.getElementById("contador").textContent = "Quantidade de Tentativas: " + tentativas.length

    if (palpite > numeroSecreto){
        document.getElementById("mensagem").textContent = "O número secreto é menor ↓"
        mensagem.style.color = "purple"
    } else if (palpite < numeroSecreto){
        document.getElementById("mensagem").textContent = "O número secreto é maior ↑"
        mensagem.style.color = "purple"
    } else {
        document.getElementById("mensagem").textContent = "Parabéns, você acertou 🎉!!  Por Favor recarregue a página para jogar novamente"
        mensagem.style.color = "green"
        jogoAcabou = true
    }
}