const parentheses = /[\( | \)]/ig;
const opRepeatOnceOrMore = /(\^\+)$/i;
const opRepeat = /(\*)$/i;
const opChanger = /\s+\+\s+/ig;

const expressionsToMake = [];
let txt = "(ab)*";

const replacementParentheses = require('../Input/Input');

// Gera as cadeias para cada palavra, a, aa,aaa
function genExp(word)
{
    let list_wds = []
    for (i=1; i<=5 ; i++) {
        list_wds.push(word.repeat(i))
    }
    return list_wds
}

function genPlus(exp)
{
    
}

function genMult(exp)
{

}

function isRepeatOnceMore(expression){  
    if(!testExpression(opRepeatOnceOrMore, expression)){
        return false;
    }

    //  Irá retirar o sinal, e os parenteses restando as funções
    console.log(`repetir a expressão ${expression} pelo menos um ou mais vezes`);
}

function isRepeat(expression){
    if(!testExpression(opRepeat, expression)){
        return false;
    }

    console.log(`repetir a ${expression} nenhuma ou muita vezes`);
}


function testExpression(regex, exp)
{
    return regex.test(exp);
}
