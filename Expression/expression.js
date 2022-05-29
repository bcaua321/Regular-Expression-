const parentheses = /[\( | \)]/ig;
const opRepeatOnceOrMore = /(\^\+)$/i;
const opRepeat = /(\*)$/i;
const opChanger = /\s+\+\s+/ig;

const expressionsToMake = [];
let txt = "01*";

const replacementParentheses = require('../Input/Input');
console.log(replacementParentheses(txt)[0]);
console.log(clearExpression(replacementParentheses(txt)[0]));

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
    let expression; 
    let alternator, operator, repeatAll = false; 

    testExpression(opChanger, input[0]) ? alternator = true : alternator = false;
    testExpression(opRepeatOnceOrMore, input[0]) ? operator = "^+": operator = ""; 
    testExpression(opRepeat, input[0]) ? operator="*" : operator = ""; 

    if(operator == "^+"){
        if(testExpression(parentheses, input[0])){
            repeatAll = true;
        }

        input[0] = input[0].replace(opRepeatOnceOrMore, "").replace(parentheses, "");
    } else if(operator == "*"){
        if(testExpression(parentheses, input[0])){
            repeatAll = true;
        }
        
        input[0]= input[0].replace(opRepeat, "").replace(parentheses, "");
    } 
    
    input[0]= input[0].replace(parentheses, "");
    if(alternator) {
        input[0] = input[0].split('+');
    }   


    return {
        expression: [input[0], input[1]],
        operator: [operator, repeatAll]
    }
}


function testExpression(regex, exp)
{
    return regex.test(exp);
}
