// 9. Conversão Entre Formatos
// Escreva duas funções:
// paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
// objetoParaPares(obj) faz o inverso, retornando um array de pares.

// Converte um array de pares em um objeto
function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const chave = pares[i][0]; // pega o primeiro elemento do par (a chave)
    const valor = pares[i][1]; // pega o segundo elemento do par (o valor)
    obj[chave] = valor; // adiciona ao objeto
  }
  return obj;
}

// Converte um objeto em um array de pares
function objetoParaPares(obj) {
  const pares = [];
  for (let chave in obj) {
    pares.push([chave, obj[chave]]); // cria um par [chave, valor] e adiciona ao array
  }
  return pares;
}

// Exemplo de uso:
const pares = [['nome', 'Ingrid'], ['idade', 30]];
const objeto = paresParaObjeto(pares);
console.log("Objeto convertido:", objeto);

const paresConvertidos = objetoParaPares(objeto);
console.log("Array de pares convertido:", paresConvertidos);

