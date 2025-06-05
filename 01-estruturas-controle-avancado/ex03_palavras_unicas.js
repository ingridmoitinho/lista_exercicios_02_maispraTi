// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

function palavrasUnicas(frase) {
  // Quebra a frase em palavras usando espaço como separador
  const palavras = frase.split(" ");

  // Cria um array vazio para guardar palavras únicas
  const unicas = [];

  // Passa por cada palavra do array
  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];

    // Se palavra não está no array 'unicas', adiciona ela
    if (unicas.indexOf(palavra) === -1) {
      unicas.push(palavra);
    }   
  }

  // Retorna o array com as palavras únicas
  return unicas;
}

// Exemplo: chama a função e mostra resultado no console
const frase = "olá olá mundo mundo";
console.log(palavrasUnicas(frase)); 


