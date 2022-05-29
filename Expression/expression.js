const changerOp = /(\s+\+\s+)/i;
const parentheses = /[\( | \)]/ig;
const repeatOnceOrMore = /(\^\+)$/i;
const repeat = /(\*)$/i;
let txt = "(ab + (ab + c))c";

const replacementParentheses = require('../Input/Input');
console.log(replacementParentheses(txt));

function MakeExpression(element, operation)
{

}

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
    if(!testExpression(repeatOnceOrMore, expression)){
        return false;
    }

    //  Irá retirar o sinal, e os parenteses restando as funções
    expression = expression.replace(repeatOnceOrMore, "").replace(parentheses, "");
    console.log(`repetir a expressão ${expression} pelo menos um ou mais vezes`);
}

function isRepeat(expression){
    if(!testExpression(repeat, expression)){
        return false;
    }

    //  Irá retirar o sinal, e os parenteses restando as funções
    expression = expression.replace(repeat, "").replace(parentheses, "");
    console.log(`repetir a ${expression} nenhuma ou muita vezes`);
}

function clearExpression(){

}

isRepeatOnceMore("(ab + c)^+");

function testExpression(regex, exp)
{
    return regex.test(exp);
}
