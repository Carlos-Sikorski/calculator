// calculadora simples => adição(+)/subtração(-)/multiplicação(*)/divisão(/)/porcentagem(%)
// validação dos dados => é uma necessidade de programação
// não somar letras, nem caracteres especiais
// throw new Error('os parametros devem ser números');
// 'typeof'=> retorna uma string indicando o tipo de um operando
// fluxo de excecução da calculadora
// usuario digita um número => qual operação deseja fazer? => outro núnmero === resultado

const prompt = require('prompt-sync')();

console.log("**SEJA BEM VINDO A LIONS-CALCULATOR**")

function input() {

    const numero1 = Number(prompt('Digite o primeiro número: '))

    const operacao = (prompt(`Agora, digite a operação("+", "-", "*", "/" e "%") R:`))

    const numero2 = Number(prompt('Digite o segundo número: '))

    return operacoes(operacao, numero1, numero2)

}

function operacoes(op, nm1, nm2) {

    switch (op) {

        case '+':
            soma(nm1, nm2)
            break;

        case '-':
            subtracao(nm1, nm2)
            break;

        case '*':
            multiplicacao(nm1, nm2)
            break;

        case '/':
            divisao(nm1, nm2)
            break;

        case '%':
            porcentagem(nm1, nm2)
            break;

        case 'default': 


    }

    

}

function soma(id1, id2) {

    let resultado = (id1 + id2)
    return console.log(resultado.toFixed(2))

}

function subtracao(id1, id2) {

    let resultado = (id1 - id2)
    return resultado.toFixed(2)

}

function multiplicacao(id1, id2) {

    let resultado = (id1 * id2)
    return resultado.toFixed(2)

}

function divisao(id1, id2) {

    let resultado = (id1 / id2)
    return resultado.toFixed(2)

}

function porcentagem(id1, id2) {

    let resultado = (id1) * (id2 / 100)
    return resultado.toFixed(2)

}

input()
