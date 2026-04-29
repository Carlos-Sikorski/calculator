// calculadora simples => adição(+)/subtração(-)/multiplicação(*)/divisão(/)/porcentagem(%)
// validação dos dados => é uma necessidade de programação
// não somar letras, nem caracteres especiais
// throw new Error('os parametros devem ser números');
// 'typeof'=> retorna uma string indicando o tipo de um operando
// fluxo de excecução da calculadora
// usuario digita um número => qual operação deseja fazer? => outro núnmero === resultado

const prompt = require('prompt-sync')({sigint: true});

console.log("**SEJA BEM VINDO A LIONS-CALCULATOR HP12C**")

function input() {

        teste++;
        console.log(teste)
    const numero1 = Number(prompt('Digite o primeiro número: '))

    if(isNaN(numero1)) {

        console.log("Você não digitou um número, tente novamente!")
        input()
        return;

    }

    const numero2 = Number(prompt('Digite o segundo número: '))


    if(isNaN(numero2)) {

        console.log("Você não digitou um número, tente novamente!")
        input()
        return;

    }

    const operacao = prompt(`Agora, digite a operação("+", "-", "*", "/" e "%") R:`)
   
    

 /*    if(operacao !== "+" || "-" || "*" || "/" || "%") {


        console.log("Opção inválida! Tente novamente!")
        input()
    } */

    

    switch (operacao) {

        case '+':
            soma(numero1, numero2)
            break;

        case '-':
            subtracao(numero1, numero2)
            break;

        case '*':
            multiplicacao(numero1, numero2)
            break;

        case '/':
            divisao(numero1, numero2)
            break;

        case '%':
            porcentagem(numero1, numero2)
            break;

        default: 
        console.log("Opção inválida! Tente novamente!")
        input()

    }

    

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
    return console.log(`O resultado da operação é ${resultado.toFixed(2)}`)

}

function subtracao(id1, id2) {

    let resultado = (id1 - id2)
    return console.log(`O resultado da operação é ${resultado.toFixed(2)}`)

}

function multiplicacao(id1, id2) {

    let resultado = (id1 * id2)
    return console.log(`O resultado da operação é ${resultado.toFixed(2)}`)

}

function divisao(id1, id2) {

    let resultado = (id1 / id2)
    return console.log(`O resultado da operação é ${resultado.toFixed(2)}`)
    

}

function porcentagem(id1, id2) {

    let resultado = ((id2 / id1) * 100)
    return console.log(`O resultado da operação é ${resultado.toFixed(2)}%`)
    

}

input()
