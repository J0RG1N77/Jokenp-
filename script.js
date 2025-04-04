function jogar() {
  let escolhajogador = prompt("Digite 1-Pedra / Digite 2-Papel / Digite 3-Tesoura")
  let escolhacomputador = Math.floor(Math.random() * 3) + 1
  console.log(escolhacomputador)
  //Jogador escolher Pedra 
  if (escolhajogador == 1){
    if (escolhacomputador == 1)
      alert("Empate, computador escolheu Pedra")
    if (escolhacomputador == 2)
      alert("Computador Venceu, computador escolheu Papel")
    if (escolhacomputador == 3)
      alert("Você Venceu, computador escolheu Tesoura")
  }
  //Jogador escolher Papel
  if (escolhajogador == 2){
    if (escolhacomputador == 1)
      alert("Você Venceu, computador escolheu Pedra")
    if (escolhacomputador == 2)
      alert("Empate, computador escolheu Papel")
    if (escolhacomputador == 3)
      alert("Você Perdeu, computador escolheu Tesoura")
  }
  //Jogador escolher Tesoura
  if (escolhajogador == 3){
      if (escolhacomputador == 1)
        alert("Você Perdeu, computador escolheu Pedra")
      if (escolhacomputador == 2)
        alert("Você venceu, computador escolheu Papel")
      if (escolhacomputador == 3)
        alert("Empate, computador escolheu Tesoura")
    }
  
  
}



