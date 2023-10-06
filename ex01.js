import PromptSync from "prompt-sync"

const prompt = PromptSync


function somar(a, b){
    return a+b
}

function subtrair(a, b){
    return a-b
}

function dividir(a, b){
    if(b === 0){
        return "Não é possível dividir com a base 0"
    }
        return a/b
}

function multiplicar(a, b){
    return a*b
}

function calcular(a, b, callback){
    return callback(a,b)
}

const a = 4
const b = 6

const resultadoSoma = calcular(a, b, somar);
const resultadoSubtracao = calcular(a, b, subtrair);
const resultadoDivisao = calcular(a, b, dividir);
const resultadoMultiplicacao = calcular(a, b, multiplicar);

console.log("Soma:", resultadoSoma);
console.log("Subtração:", resultadoSubtracao);
console.log("Divisão:", resultadoDivisao);
console.log("Multiplicação:", resultadoMultiplicacao);


