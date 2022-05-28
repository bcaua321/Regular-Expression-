const expressionParentheses = /(\([\w+\s*\+*\s*\w*\s*]+\)(\^\+)?\*?)/i; // expressão para pegar paranteses
const expressionIsCompost = /\)[\+ | \*]*\s+\+\s+\(/i; // Para verificar se é composta (incompleta)
const normalExpression = /(\w+((\^\+)?\*?)\s*)*/i; // Normal expression

const expressions = []; // Para guardar as expressões com parenteses
const expressionDivide = [];
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


// replacement(txt);

// console.log("Expressões encontradas")
// for(let i of expressions)
// {
//   console.log(i[0]);
// }

// (xcsd) + dasd

function divideString(input, index){
  if(typeof input != 'string'){
    return;
  }

  let firstIndex = input.indexOf(")", index);
  let firstIndexMore = input.indexOf("+", index);
  console.log(firstIndex);
  console.log(firstIndexMore);

  if((firstIndex != -1 && firstIndexMore != -1)){
    return " ";
  }
  
  if((firstIndex > firstIndexMore)) { 
    divideString(input, firstIndex + 1);
  }

  let expressionsAux = input.slice(0, firstIndexMore);
  expressionDivide.push(expressionsAux);
  divideString(index, expressionsAux.length);  
}

function isCompost(input){
  if(typeof input == 'string'){
    let exp = input.match(expressionCompost);
    if(exp == null){
      return false;
    } 
    
    let idx = input.indexOf("+", exp.index);

    expressions.push(txt.split("+", idx));
    return true;
  }
}

replacementParentheses(txt);
console.log(expressions);