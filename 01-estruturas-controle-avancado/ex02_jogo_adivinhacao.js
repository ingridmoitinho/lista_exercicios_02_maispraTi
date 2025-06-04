// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário
// para adivinhar. Use while para repetir até acertar, contando tentativas e
// exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const readline = require('readline');

// Cria interface para ler o que o usuário digita 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Gera número aleatório de 1 a 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;

console.log("Tente adivinhar o número entre 1 e 100.");

function perguntar() {
  rl.question("Seu palpite: ", (resposta) => {
    tentativas++;

    // Converte resposta para número
    const palpite = Number(resposta);

    if (isNaN(palpite)) {
      console.log("Por favor, digite um número válido.");
      perguntar(); 
      return;
    }
    // Verifica o palpite
    if (palpite === numeroSecreto) {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
      rl.close();
    } else if (palpite < numeroSecreto) {
      console.log("Mais alto!");
      perguntar(); 
    } else {
      console.log("Mais baixo!");
      perguntar();
    }
  });
}

perguntar(); 
