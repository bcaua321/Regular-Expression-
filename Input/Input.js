const expressionParentheses = /(\([\w+\s*\+*\s*\w*\s*]+\)(\^\+)?\*?)/i; // Expressões compostas, ex: (ab + c), (ab + (b + c))*, etc...
const normalExpression = /(\w+((\^\+)?\*?))/i; // Expressões normais, ex: ab*

const expressions = []; // Para guardar as expressões com parenteses

// Testes
function input(input){
  if(typeof input == 'string'){
    let a = input.match(expression);

    return a;
  }
}

let txt = "(ab + c)(ab + (ab + (ab + c)))^+ + (ab)* + abc^+";

// Função recursiva para substituir as expressões do tipo (ab + b) e dar o push para expressions
function replacementParentheses(input){
  if(typeof input != 'string'){
    return -1;
  }

  // se nao encontrar expressões compostas, chama a função para pegar expressões do tipo ab*, etc...
  if(input.search(expressionParentheses) == -1){
    replacementNormal(input);
    return;
  }

  // se encontrar expressões do tipo composta, irá dar o push 
  expressions.push(input.match(expressionParentheses)[0]);

  return replacementParentheses(input.replace(expressionParentheses, "exp"));
}

// Função recursiva para pegar expressões sozinhas ex: ab*, só será chamada quando não for encontrada expressões do tipo composta.
function replacementNormal(input){
  if(typeof input != 'string'){
    return -1;
  }

  if(input.search(normalExpression) == -1){
    return;
  }

  input = input.replace(/exp/ig, "").trim(); 
  expressions.push(input.match(normalExpression)[0]);
  console.log(input);

  return replacementNormal(input.replace(normalExpression, ""));
}

replacementParentheses(txt);
console.log(expressions);