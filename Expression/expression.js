const changerOp = /(\s+\+\s+)/i;
const parentheses = /[\( | \)]/ig;
const repeatOnceOrMore = /(\^\+)$/i;
const repeat = /(\*)$/i;
let txt = "(ab + (ab + c))c";

const replacementParentheses = require('../Input/Input');
console.log(replacementParentheses(txt));
import replacementParentheses from '../Input/Input';

//Funçao que varre as expressões passa para a determinada função geradora
function MakeExpression(exp)
{
    //lista para guardar as expressoes prontas
    //percorre a lista e testa os operadores
    let mounted_exp = []
    exp.array.forEach(element => {
        if(testExpression(repeatOnceOrMore,element))
        {
            mounted_exp.push(genPlus(element))
        }
        else if (testExpression(repeat, element))
        {
            mounted_exp.push(genMult(element))
        }
    });

    console.log(mounted_exp)
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

//isRepeatOnceMore("(ab + c)^+");

//chama a funçao que monta a expressão
MakeExpression(replacementParentheses(txt))

function testExpression(regex, exp)
{
    return regex.test(exp);
}
