const changerOp = /(\s+\+\s+)/i;
const parentheses = /[\( | \)]/i;
const repeatOnceOrMore = /(\^\+)/i;
const repeat = /(\*)$/i;


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

function testExpression(regex, exp)
{
    if(regex.test(exp))
    {
        return true
    }
    return false
}

function genPlus(exp)
{

}

function genMult(exp)
{

}

console.log(genExp("a"))

