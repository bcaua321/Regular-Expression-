const parentheses = /[\( | \)]/ig;
const opRepeatOnceOrMore = /(\^\+)$/i;
const opRepeat = /(\*)$/i;
const opChanger = /\s+\+\s+/ig;

const expressionsToMake = [];
let txt = "(ab)*";

const replacementParentheses = require('../Input/Input');

console.log("input: " + replacementParentheses(txt)[0]);
console.log(clearExpression(replacementParentheses(txt)[0]));

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

function clearExpression(input){
    const expression = []; 
    let alternator, repeatMore, repeat; 

    testExpression(opChanger, input[0]) ? alternator = true : alternator = false;
    testExpression(opRepeatOnceOrMore, input[0]) ? repeatMore = true : repeatMore = false; 
    testExpression(opRepeat, input[0]) ? repeat = true : repeat = false; 

    if(repeatMore){
        input[0] = input[0].replace(opRepeatOnceOrMore, "").replace(parentheses, "");
    } else if(repeat){
        input[0] = input[0].replace(opRepeat, "").replace(parentheses, "");
    } 
    
    if(alternator) {
        input[0] = input[0].replace(parentheses, "");
        expression.push(input[0].split(opChanger));
    }   

    input[0] = input[0].replace(parentheses, "");
    
    return {
        expressison: input[0],
        alternator: alternator,
        repeatMore: repeatMore,
        repeat: repeat,
        concatenation: !input[1]
    }
}


function testExpression(regex, exp)
{
    return regex.test(exp);
}
