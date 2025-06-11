// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

function nomesOrdenadosPorPreco(produtos) {
  let copia = produtos.slice(); // cópia do array original

  copia.sort((a, b) => a.preco - b.preco); // ordena por preço crescente

  let nomes = copia.map(prod => prod.nome); // extrai os nomes
  let nomesComPreco = copia.map(prod => `${prod.nome} - R$${prod.preco.toFixed(2)}`); // nomes + preço

  console.log("Nomes ordenados por preço:", nomes);
  console.log("Nomes com preços:", nomesComPreco);
}

let produtos = [
  { nome: "Arroz", preco: 5.50 },
  { nome: "Feijão", preco: 6.80 },
  { nome: "Maçã", preco: 3.20 },
  { nome: "Leite", preco: 4.90 },
  { nome: "Carne", preco: 25.00 },
  { nome: "Ovos", preco: 10.00 },
];

nomesOrdenadosPorPreco(produtos);
