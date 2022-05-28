const expressionParentheses = /(\([\w+\s*\+*\s*\w*\s*]+\)(\^\+)?\*?)/i; // expressão para pegar paranteses
const normalExpression = /(\w+((\^\+)?\*?)\s*)*/i; // Normal expression

const expressions = []; // Para guardar as expressões com parenteses

// Testes
function input(input){
  if(typeof input == 'string'){
    let a = input.match(expression);

    return a;
  }
}

let txt = "(ab + c )(ab + (ab + (ab + c)))^+ + (ab)* + a";

// Para substituir as expressões encontradas por "exp"
function replacementParentheses(input){
  if(typeof input != 'string'){
    return -1;
  }

  if(input.search(expressionParentheses) == -1){
    return;
  }

  expressions.push(input.match(expressionParentheses)[0]);

  return replacementParentheses(input.replace(expressionParentheses, "exp"));
}

function replacementNormal(input){
  if(typeof input != 'string'){
    return -1;
  }

  if(input.search(normalExpression) == -1){
    return;
  }

}

replacementParentheses(txt);
console.log(expressions);