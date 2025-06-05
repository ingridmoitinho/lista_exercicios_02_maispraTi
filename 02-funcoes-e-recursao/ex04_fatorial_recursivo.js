// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

function fatorial(n) {
  // Se n for menor que 0, lança um erro
  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }

  // Se n for igual a 0, retorna 1 
  if (n === 0) {
    return 1;
  }

  // Chamada recursiva: fatorial(n) = n * fatorial(n - 1)
  return n * fatorial(n - 1);
}

// Exemplos de uso:
console.log(fatorial(5)); // Mostra: 120 (5 * 4 * 3 * 2 * 1)
console.log(fatorial(0)); // Mostra: 1
console.log(fatorial(-3)); // Erro
