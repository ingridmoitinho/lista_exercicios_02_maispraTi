// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro)
// e false caso contrário.

function ehDataValida(dia, mes, ano) {
  // Verifica se os valores são números e se estão em faixas válidas
  if (typeof dia !== "number" || typeof mes !== "number" || typeof ano !== "number") return false;
  if (dia < 1 || mes < 1 || mes > 12 || ano < 1) return false;

  // Dias máximos de cada mês (índice 0 = janeiro, índice 1 = fevereiro, etc.)
  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Se for ano bissexto, altera fevereiro para 29 dias
  if (ehBissexto(ano)) {
    diasPorMes[1] = 29;
  }

  // Verifica se o dia é válido para o mês correspondente
  return dia <= diasPorMes[mes - 1];
}

// Função auxiliar para verificar se o ano é bissexto
function ehBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Exemplos de uso
console.log(ehDataValida(29, 2, 2020)); // true - ano bissexto
console.log(ehDataValida(29, 2, 2021)); // false - não é bissexto
console.log(ehDataValida(31, 4, 2023)); // false - abril tem 30 dias
console.log(ehDataValida(15, 10, 2023)); // true - data válida