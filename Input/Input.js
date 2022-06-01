const expressionParentheses = /((\([\w+\s*\+*\s*\w*\s*]+\)(\^\+)?\*?))(\s+\+)?/i; // Expressões compostas, ex: (ab + c), (ab + (b + c))*, etc...
const normalExpression = /(\w+((\^\+)?\*?))(\s+\+)?/i; // Expressões normais, ex: ab*
const compostExpression = /(\s+\+)$/i; // Para pegar o sinal de ' +' ao final da expressão
const expressions = []; // Para guardar as expressões com parenteses

// Função recursiva para substituir as expressões do tipo (ab + b) e dar o push para expressions
function replacementParentheses(input){
  let expressionAux = [];
  if(typeof input != 'string'){
    return -1;
  }

  // se nao encontrar expressões compostas, chama a função para pegar expressões do tipo ab*, etc...
  if(input.search(expressionParentheses) == -1){
    replacementNormal(input);
    return expressions;
  }

  let expression = input.match(expressionParentheses)[0];

  if(isCompost(expression)){
    expressionAux.push(expression.replace(compostExpression, ''), true)
  } else {
    expressionAux.push(expression.replace(compostExpression, ''), false)
  }

  // se encontrar expressões do tipo composta, irá dar o push 
  expressions.push(expressionAux);

  return replacementParentheses(input.replace(expressionParentheses, "exp"));
}

// Função recursiva para pegar expressões sozinhas ex: ab*, só será chamada quando não for encontrada expressões do tipo composta.
function replacementNormal(input){
  let expressionAux = []; // auxilia para preenchimento de array de array
  if(typeof input != 'string'){
    return -1;
  }

  input = input.replace(/exp/ig, "").trim(); 

  if(input.search(normalExpression) == -1){
    return;
  }

  let expression = input.match(normalExpression)[0];
  
  if(isCompost(expression)){
    expressionAux.push(expression.replace(compostExpression, ''), true);
  } else {
    expressionAux.push(expression.replace(compostExpression, ''), false);
  }

  expressions.push(expressionAux);
  return replacementNormal(input.replace(normalExpression, ""));
}

// Verifica se a função tem o operador de alternância 'ab +' ao final da expressão
function isCompost(input){
  if(typeof input != 'string'){
    return;
  }

  return compostExpression.test(input);
}

module.exports = replacementParentheses;
