/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arr) => {
  let arrEmpty = [];
  let soma = 0;
  let res;

  // a) fazer um loop para pegar o valor de cada posição do array
  // b) condição para dizer que se o elemento do array for de tipo diferente de number ou se estiver vazio, será undefined
  // c) retornar a média dos valores recebidos, solando o elemnto de cada posição e dividido pelo número de posições
  // referência para o uso do Math.round que arredonda o número para um númeor inteiro: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  for (let el of arr) {
    if (typeof (el) !== 'number' || arr === arrEmpty) {
      return undefined;
    }
    soma += el;
    res = Math.round(soma / arr.length);
  }
  return res;
};

module.exports = average;
