// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args); // cria uma chave única para os argumentos

    if (cache.has(key)) {
      return cache.get(key); // retorna resultado em cache
    }

    const result = fn.apply(this, args); // calcula resultado
    cache.set(key, result); // armazena no cache

    return result;
  };
}

// Exemplo de uso:

// Função fatorial recursiva que será memoizada
function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

const fatorialMemoizado = memoize(fatorial);

console.log(fatorialMemoizado(5)); // calcula e armazena no cache
console.log(fatorialMemoizado(5)); // retorna instantaneamente do cache
