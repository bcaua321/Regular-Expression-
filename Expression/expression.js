const changerOp = /(\s+\+\s+)/i;
const parentheses = /[\( | \)]/i;

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


console.log(genExp("a"))

