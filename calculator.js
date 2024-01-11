function add(num1 , num2){
    return num1 + num2
  }


function subtract(num1, num2) {
    return num1 - num2
}

function multipy(num1 , num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function pwr(num1, num2){
  return num1 ** num2
}

function mod(num1, num2){
  return num1 % num2
}

function sqrt(num1){
  return num1 ** 0.5 
}

function calculate(expression) {
  const tokens = expression.split (' ')

  // const op = tokens[1]
  // const num1 = Number(tokens[0])
  // const num2 = Number(tokens[2])

  let num1;
  let op;
  let num2;

  if (tokens.length === 3){
    op = tokens[1]
    num1 = Number(tokens[0])
    num2 = Number(tokens[2])
    if(Number.isNaN(num1) || Number.isNaN(num2)){
      alert("Hey, that isn't a number")
     return ('invalid expression');
    }
  } 
  else if (tokens.length === 2){
    op = tokens[0];
    num1 = Number(token[1])
    if(Number.isNaN(num1)){
      alert("Hey, that isn't a number")
      return;
    }
   }

  if (op === "+"){
    return add(num1,num2)
  }
  if (op === "-"){
    return subtract(num1,num2)
  }
  if(op === "*"){
    return multipy(num1,num2)
  }
  if(op === "/"){
    return divide(num1,num2)
  }
  if(op === "^"){
    return pwr(num1, num2)
  }
  if (op === "%"){
    return mod(num1, num2)
  }
  if(op === "sqrt"){
    return sqrt(num1)
  }

  

}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
