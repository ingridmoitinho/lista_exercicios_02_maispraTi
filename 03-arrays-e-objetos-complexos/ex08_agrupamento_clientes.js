// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

function agruparVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda; 
   // Verifica se o cliente já existe no acumulador
    // Se não existir, inicializa com 0
    if (!acumulador[cliente]) {
      acumulador[cliente] = 0;
    }
    
    acumulador[cliente] += total;

    // Retorna o acumulador atualizado para a próxima iteração
    return acumulador;
  }, {}); // inicializa o acumulador como um objeto vazio
}

// Exemplo de uso
const vendas = [
  { cliente: "João", total: 100 },
  { cliente: "Maria", total: 150 },
  { cliente: "João", total: 50 },
  { cliente: "Ana", total: 200 },
  { cliente: "Maria", total: 100 },
];

const totalPorCliente = agruparVendasPorCliente(vendas);
console.log(totalPorCliente);



