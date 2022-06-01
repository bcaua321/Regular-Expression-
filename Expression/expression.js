const parentheses = /[\( | \)]/ig;
const opRepeatOnceOrMore = /(\^\+)$/i;
const opRepeat = /(\*)$/i;
const opChanger = /\s+\+\s+/ig;

//let input = "(a + b)a*";

const replacementParentheses = require('../Input/Input');
const process = require("process")

let replacedExps = []

//Pega o input do terminal
const data = process.argv

replacedExps = replacementParentheses(data[2])

let expressionsToMake = []


for (let i = 0; i < replacedExps.length; i++) {
    expressionsToMake.push(clearExpression(replacedExps[i]))
}

console.log(genExp(expressionsToMake))

// Gera as cadeias para cada palavra, a, aa,aaa
function genExpSingle(keep, word)
{
    let list_wds = []
    if(!keep)
    {
        for (i=1; i<=4 ; i++) {
            list_wds.push(word.repeat(i))
        }
    } else {
        for (i=1; i<=4 ; i++) {
            list_wds.push(keep + word.repeat(i))
        }
    }
    return list_wds
}

function genExpComposite(keep, listWords)
{
    let list_wds = []
    for (i=1; i<=4 ; i++)
    {
        if(typeof listWords === "object")
        {
            listWords.map(item => {
                list_wds.push(item.repeat(i))
            })
        } else {
            if (!keep)
            {
                list_wds.push(listWords.repeat(i))
            } else {
                list_wds.push(keep + listWords.repeat(i))
            }
        }
    }
    return list_wds
}

function genExp(exp)
{   
    full_exps = []
    for (let i = 0; i < exp.length; i++) {
        if(!exp[i].operator[0])
        {
            let templist = []
            if(typeof exp[i].expression[0] == "object")
            {
                exp[i].expression[0].map(item => {
                    templist.push(item)
                })
            } else {
                templist.push(exp[i].expression[0])
            }
            full_exps.push(templist)
        }
        
        if(exp[i].operator[0] === "*")
        {
            if(typeof exp[i].expression[0] === "object")
            {
                full_exps.push(genExpComposite("", exp[i].expression[0]))
            }
            else
            {
                if(!exp[i].operator[1]){
                    full_exps.push(genExpComposite("",exp[i].expression[0]))
                } else {
                    full_exps.push(genExpComposite(keep=exp[i].expression[0][0],exp[i].expression[0][1]))
                }
            }
        }
        
        if(exp[i].operator[0] === "^+")
        {
            if(exp[i].operator[1])
            {
                full_exps.push(genExpSingle("", exp[i].expression[0]))
            }
            else
            {
                full_exps.push(genExpSingle(keep=exp[i].expression[0][0], exp[i].expression[0][1]))
            }
        } 
    }
    return full_exps
}

function clearExpression(input){
    let expression; 
    let alternator, operator, repeatAll = false; 

    testExpression(opChanger, input[0]) ? alternator = true : alternator = false;
    testExpression(opRepeatOnceOrMore, input[0]) ? operator = "^+":  testExpression(opRepeat, input[0]) ? operator="*" : operator = "";  
    
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
