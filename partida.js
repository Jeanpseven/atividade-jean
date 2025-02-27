let totalPontos = 0;

for (let i = 1; i <= 6; i++) {
  let saldo = parseInt(prompt(`Digite o saldo de gols da partida ${i}: `));

  if (saldo > 0) {
    totalPontos += 3; // Time venceu
  } else {
    totalPontos += 1; // Time perdeu ou empatou
  }
}

console.log(`O total de pontos do time é: ${totalPontos}`);

// B) if-else é o mais recomendado
// C)  o time deve ganhar pelo menos 4 partidas para ser o campeão
