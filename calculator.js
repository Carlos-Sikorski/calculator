// calculadora simples => adição(+)/subtração(-)/multiplicação(*)/divisão(/)/porcentagem(%)
// validação dos dados => é uma necessidade de programação
// não somar letras, nem caracteres especiais
// throw new Error('os parametros devem ser números');
// 'typeof'=> retorna uma string indicando o tipo de um operando
// fluxo de excecução da calculadora
// usuario digita um número => qual operação deseja fazer? => outro núnmero === resultado

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.output
})