const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/
// tudo o que vem depois do . do expected é uma propriedade;
describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:z
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    // referência para utilização do método Array.isArray (retorna um booleano): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    expect(Array.isArray(productDetails())).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    // referência para utilização do método toHaveLength: https://jestjs.io/docs/expect#tohavelengthnumber
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // verifica uma posição por vez dentro do array que é um objeto
    expect(typeof productDetails([0])).toEqual('object');
    expect(typeof productDetails([1])).toEqual('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toBe(productDetails('Alcool gel', 'Máscara')[1]);
    // Teste se os dois productIds terminam com 123.
    // referencia para utilização do método slice para pegar os 3 ultimos carecteres do valor da chave desejada: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    const param = productDetails('Alcool gel', 'Máscara');
    expect(param[0].details.productId.slice(-3)).toBe('123');
    expect(param[1].details.productId.slice(-3)).toBe('123');
  });
});
